import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { OllamaEmbeddings } from "@langchain/ollama";

// Fix for ES modules (__dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let vectorStore;

// 🧠 STEP 1: Load and prepare data
async function loadData() {
  const filePath = path.join(__dirname, "../data/profile.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(rawData);

  // Convert JSON → plain text chunks
  const documents = jsonData.map(item => ({
    pageContent: `${item.title}: ${item.content}`,
    metadata: { source: item.title }
  }));

  return documents;
}

// ✂️ STEP 2: Split text into chunks
async function splitDocuments(documents) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 300,
    chunkOverlap: 50
  });

  return await splitter.splitDocuments(documents);
}

// 🧬 STEP 3: Create embeddings + vector store
export async function initializeRAG() {
  const docs = await loadData();
  const splitDocs = await splitDocuments(docs);

  const embeddings = new OllamaEmbeddings({
    model: "mistral" // uses local Ollama
  });

  vectorStore = await MemoryVectorStore.fromDocuments(
    splitDocs,
    embeddings
  );

  console.log("✅ RAG initialized");
}

// 🔍 STEP 4: Retrieve relevant context
export async function getRelevantContext(query) {
  if (!vectorStore) {
    throw new Error("RAG not initialized");
  }

  const results = await vectorStore.similaritySearch(query, 4);

  // 🔥 Add relevance check (basic version)
  if (!results || results.length === 0) {
    return {
      context: "",
      sources: [],
      isRelevant: false
    };
  }

  const context = results.map(r => r.pageContent).join("\n");
  const sources = results.map(r => r.metadata.source);

  return {
    context,
    sources,
    isRelevant: true
  };
}