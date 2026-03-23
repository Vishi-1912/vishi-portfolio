import "dotenv/config";
import express from "express";
import cors from "cors";
// import ollama from "ollama";
import { getRelevantContext, initializeRAG } from "./services/ragService.js";
import { streamGroqResponse } from "./services/llmService.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Chatbot backend running");
});

// initializeRAG();

// app.get("/chat", async (req, res) => {
//     const message = req.query.message;

//     // ✅ SSE headers
//     res.setHeader("Content-Type", "text/event-stream");
//     res.setHeader("Cache-Control", "no-cache, no-transform");
//     res.setHeader("Connection", "keep-alive");
//     res.setHeader("X-Accel-Buffering", "no");

//     res.flushHeaders();

//     try {
//         const { context, sources, isRelevant } = await getRelevantContext(message);

//         if (!isRelevant || !context.trim()) {
//             return res.json({
//                 answer: "I'm designed to answer questions about Vishi Tyagi's profile, skills, and projects. Please ask something related 🙂",
//                 sources: []
//             });
//         }

//         const prompt = `
//             You are Vishi Tyagi's AI assistant.

//             STRICT RULES:
//             - Answer ONLY using the provided context
//             - ONLY answer questions related to Vishi Tyagi (profile, skills, projects, experience)
//             - If the question is unrelated (like geography, general knowledge, etc.), politely refuse

//             If unrelated, respond like:
//             "I'm designed to answer questions about Vishi Tyagi's profile and experience. Please ask something related."

//             Context:
//             ${context}

//             Question:
//             ${message}
//         `;

//         const stream = await ollama.chat({
//             model: "mistral",
//             messages: [{ role: "user", content: prompt }],
//             stream: true
//         });

//         // 🔁 Send tokens
//         console.log("Starting stream for:", message);
//         for await (const chunk of stream) {
//             const token = chunk.message.content;
//             if (token) {
//                 res.write(`event: token\n`);
//                 res.write(`data: ${JSON.stringify(token)}\n\n`);
//             }
//         }

//         // 📚 Send sources
//         res.write(`event: sources\n`);
//         res.write(`data: ${JSON.stringify(sources)}\n\n`);

//         // ✅ End event
//         res.write(`event: end\n`);
//         res.write(`data: done\n\n`);

//         res.end();

//     } catch (err) {
//         console.error(err);

//         res.write(`event: error\n`);
//         res.write(`data: ${JSON.stringify("Something went wrong")}\n\n`);

//         res.end();
//     }

//     // 🔥 Handle disconnect
//     req.on("close", () => {
//         console.log("Client disconnected");
//         res.end();
//     });
// });


app.get("/chat", async (req, res) => {
    const message = req.query.message;

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    try {
        const { context, sources, isRelevant } = await getRelevantContext(message);

        // 🔥 Guardrail
        if (!isRelevant || !context.trim()) {
            res.write(`event: token\n`);
            res.write(`data: ${JSON.stringify("I'm designed to answer questions about Vishi Tyagi's profile and experience. Please ask something related 🙂")}\n\n`);

            res.write(`event: end\n`);
            res.write(`data: done\n\n`);
            return res.end();
        }

        const prompt = `
            You are Vishi Tyagi's AI assistant.

            STRICT RULES:
            - Answer ONLY using the provided context
            - ONLY answer questions related to Vishi Tyagi
            - If not relevant, refuse politely

            Context:
            ${context}

            Question:
            ${message}
        `;

        // 🔁 Stream from Groq
        await streamGroqResponse(prompt, (token) => {
            res.write(`event: token\n`);
            res.write(`data: ${JSON.stringify(token)}\n\n`);
        });

        // 📚 Send sources
        res.write(`event: sources\n`);
        res.write(`data: ${JSON.stringify(sources)}\n\n`);

        res.write(`event: end\n`);
        res.write(`data: done\n\n`);

        res.end();

    } catch (err) {
        console.error(err);

        res.write(`event: error\n`);
        res.write(`data: ${JSON.stringify("Something went wrong")}\n\n`);

        res.end();
    }

    req.on("close", () => {
        console.log("Client disconnected");
        res.end();
    });
});

const startServer = async () => {
  try {
    await initializeRAG(); // 🔥 MUST WAIT

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();