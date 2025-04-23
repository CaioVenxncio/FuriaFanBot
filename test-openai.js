require("dotenv").config();
const axios = require("axios");

(async () => {
  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: "Olá, você está funcionando?" }
        ],
        temperature: 0.5,
        max_tokens: 50
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );
    console.log("✅ Resposta:", res.data.choices[0].message.content);
  } catch (err) {
    console.error("❌ Erro ao testar OpenAI:", err.response?.data || err.message);
  }
})();
