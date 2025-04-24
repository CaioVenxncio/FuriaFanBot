// api/chat.js
const axios = require("axios");

module.exports = async (req, res) => {
  // Só aceita POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ reply: "❌ Nenhuma mensagem foi enviada!" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Você é um assistente da FURIA Esports. Você só pode responder perguntas sobre o time de CS:GO da FURIA, como história, jogadores, resultados e campeonatos. Se a pergunta fugir disso, diga que não pode responder."
          },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 200
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "FURIA Chatbot"
        },
        timeout: 10000
      }
    );

    const reply = response.data.choices[0].message.content;
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("❌ OpenAI error:", err.response?.data || err.message);
    return res.status(500).json({
      reply: "❌ Desculpe, algo deu errado no servidor.",
      error: err.response?.data || err.message
    });
  }
};
