import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for ES modules (__dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let documents = [];

// 🧠 STEP 1: Load data
export async function initializeRAG() {
  try {
    const filePath = path.join(__dirname, "../data/profile.json");

    console.log("Loading data from:", filePath);

    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(rawData);

    documents = jsonData.map(item => ({
      pageContent: `${item.title}: ${item.content}`,
      metadata: { source: item.title }
    }));

    console.log("✅ RAG initialized with", documents.length, "documents");

  } catch (err) {
    console.error("❌ RAG initialization failed:", err);
  }
}

// 🔍 Simple similarity function
function simpleSimilarity(query, text) {
  const qWords = query.toLowerCase().split(/\s+/);
  const tWords = text.toLowerCase().split(/\s+/);

  let score = 0;
  qWords.forEach(word => {
    if (tWords.includes(word)) score++;
  });

  return score;
}

// 🔍 STEP 2: Retrieve context
export async function getRelevantContext(query) {
  if (!documents || documents.length === 0) {
    return {
      context: "",
      sources: [],
      isRelevant: false
    };
  }

  const scored = documents.map(doc => ({
    ...doc,
    score: simpleSimilarity(query, doc.pageContent)
  }));

  const topResults = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const context = topResults.map(d => d.pageContent).join("\n");
  const sources = topResults.map(d => d.metadata.source);

  const isRelevant = topResults[0]?.score > 0;

  return { context, sources, isRelevant };
}