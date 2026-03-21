# 🤖 AI Portfolio Chatbot (RAG-based, Local LLM)

An intelligent, self-hosted chatbot integrated into my portfolio that answers questions about my experience, projects, and skills using a **Retrieval-Augmented Generation (RAG)** pipeline powered by a local LLM.

---

## 🚀 Overview

This project is a full-stack AI system designed to simulate a real conversation with me (Vishi Tyagi).
It allows recruiters and visitors to interact with my portfolio through a chatbot that provides **accurate, context-aware, and source-backed responses**.

Unlike generic chatbots, this system:

* Uses my personal data as context
* Avoids hallucinations using RAG
* Streams responses in real-time
* Shows sources for transparency

---

## 🧠 Key Features

* 💬 **Conversational Chat Interface**
* ⚡ **Streaming Responses (real-time typing effect)**
* 📚 **Source Attribution (RAG-based answers)**
* 🧩 **Context-aware responses using personal data**
* 🏠 **Fully local LLM (no OpenAI / paid APIs)**
* 🔍 **Semantic search using embeddings**
* 🧱 **Modular backend architecture**

---

## 🏗️ Architecture

Frontend (Next.js)
→ Node.js Backend (API layer)
→ RAG Pipeline (LangChain.js)
→ Vector Store (FAISS / in-memory)
→ Local LLM (Ollama - Mistral)

---

## ⚙️ Tech Stack

### Frontend

* Next.js
* Tailwind CSS
* Streaming UI (Fetch/EventSource)

### Backend

* Node.js
* Express.js

### AI / LLM

* Ollama (Local LLM runtime)
* Mistral 7B (quantized)

### RAG & Orchestration

* LangChain.js

### Vector Store

* FAISS / In-memory vector search

### Embeddings

* Sentence Transformers / local embeddings

---

## 🧠 How It Works (RAG Pipeline)

1. User sends a query
2. Query is converted into embeddings
3. Vector search retrieves relevant chunks from personal data
4. Retrieved context is injected into prompt
5. LLM generates response based on context
6. Sources are returned along with the answer

---

## 📂 Project Structure

/backend
├── data/
│     └── profile.json
├── services/
│     ├── ragService.js
│     ├── embeddingService.js
│     └── llmService.js
├── routes/
│     └── chat.js
├── server.js

/frontend
└── (Next.js portfolio app)

---

## 📦 Installation & Setup

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd backend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Install Ollama

Download and install from official website.

---

### 4. Run LLM Model

```bash
ollama run mistral
```

---

### 5. Start Backend Server

```bash
node server.js
```

---

### 6. Run Frontend

```bash
cd frontend
npm run dev
```

---

## 🔌 API Endpoints

### POST /chat

Request:

```json
{
  "message": "Tell me about your backend experience"
}
```

Response:

```json
{
  "answer": "...",
  "sources": ["HealthBytes project", "Skills section"]
}
```

---

## 🧪 Example Questions

* "Who are you?"
* "Explain your projects"
* "What technologies do you use?"
* "Tell me about HealthBytes"
* "Are you open to opportunities?"

---

## 🧠 Prompt Engineering Strategy

The chatbot is instructed to:

* Answer as "Vishi Tyagi"
* Use only retrieved context
* Avoid hallucination
* Respond professionally and concisely

---

## ⚡ Performance Notes

* Runs locally on CPU (no GPU required)
* Optimized for small datasets
* Average response time: 2–5 seconds

---

## 🔐 Why No OpenAI API?

This project intentionally avoids external APIs to:

* Reduce cost
* Ensure data privacy
* Demonstrate understanding of LLM systems
* Showcase self-hosted AI capabilities

---

## 🚀 Future Improvements

* Conversation memory
* Voice input/output
* Better ranking (re-ranking models)
* Deployment with hosted inference
* Fine-tuning for personalization
* Analytics dashboard

---

## 💡 Learnings

* Built a full RAG pipeline from scratch
* Understood vector search & embeddings
* Implemented streaming responses
* Designed scalable AI backend architecture
* Balanced cost vs performance

---

## 👩‍💻 About Me

Vishi Tyagi
Associate Software Engineer (2+ years experience)
Specializing in Node.js, scalable backend systems, and modern web technologies.

---

## 📬 Contact

* LinkedIn: https://linkedin.com/in/vishi1912
* Email: [vishirajtyagi@gmail.com](mailto:vishirajtyagi@gmail.com)

---

## ⭐ Final Note

This project demonstrates practical LLM engineering using open-source tools, focusing on real-world constraints like cost, performance, and usability.

---