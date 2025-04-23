// server.js
const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// 1) Health-check para testar se o servidor está no dto
app.get("/api/ping", (req, res) => {
  res.json({ ok: true, msg: "pong" });
});

// 2) Logs iniciais
console.log("🔑 OPENAI_API_KEY presente?", !!process.env.OPENAI_API_KEY);

// 3) Servir front-end estático
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  console.log("📥 Recebido do front:", req.body);

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ reply: "❌ Nenhuma mensagem foi enviada!" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Você é um assistente da FURIA Esports. Você só pode responder perguntas sobre o time de CS:GO da FURIA, como história, jogadores, resultados e campeonatos. Se a pergunta fugir disso, diga que não pode responder.",
          },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 200,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "HTTP-Referer": "http://localhost:3000", // seu domínio local
          "X-Title": "FURIA Chatbot"
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    console.log("✅ OpenAI respondeu:", reply);
    res.json({ reply });
  } catch (err) {
    console.error("❌ OpenAI error:", JSON.stringify(err.response?.data || err.message, null, 2));
    res.status(500).json({
      reply: "❌ Desculpe, algo deu errado no servidor.",
      error: err.response?.data || err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});


