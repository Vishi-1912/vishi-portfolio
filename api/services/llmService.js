import Groq from "groq-sdk";

const apiKey = process.env.GROQ_API_KEY;
const groq = new Groq({
  apiKey: apiKey,
});

export async function streamGroqResponse(prompt, onToken) {
  const stream = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant", // fast & free
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    stream: true,
  });

  for await (const chunk of stream) {
    const token = chunk.choices?.[0]?.delta?.content;
    if (token) {
      onToken(token);
    }
  }
}