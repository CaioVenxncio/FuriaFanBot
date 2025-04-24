# FURIA FanBot

Chatbot interativo para fãs de CS:GO da **FURIA Esports** usando OpenRouter (GPT-3.5-turbo) em funções serverless no Vercel.

## 🎯 Funcionalidades

- Responde perguntas sobre o time de CS:GO da FURIA (história, jogadores, resultados, campeonatos).
- Comando `/jogadores` para listar o roster atual.
- Deploy de front-end estático e back-end via funções API no Vercel.

## 📂 Estrutura do Repositório

```
/ (raiz)
├─ api/
│   └─ chat.js           # Função serverless da API (back-end)
├─ public/
│   └─ index.html        # Front-end estático (UI do chatbot)
├─ .gitignore           # Evita commitar .env e node_modules
├─ README.md            # Documentação
└─ package.json         # Dependências e scripts
```

## 🚀 Como Rodar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/FuriaFanBot.git
   cd FuriaFanBot
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Crie o arquivo `.env` na raiz** com sua chave:
   ```env
   OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxxxxxx
   ```

4. **Inicie o servidor local** (emulação do serverless):
   ```bash
   npm start
   ```

5. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## ☁️ Deploy no Vercel

1. **Conecte ao GitHub** no painel do Vercel.
2. Ajuste:
   - **Framework Preset**: Other / Node.js
   - **Root Directory**: `./`
3. **Configurar Variável de Ambiente** em Settings → Environment Variables:
   ```
   Key:   OPENAI_API_KEY
   Value: sk-or-xxxxxxxxxxxxxxxxxxxxxxxxx
   ```
4. Clique em **Deploy** e aguarde.
5. Acesse:
   ```
   https://<seu-projeto>.vercel.app
   ```

### 🔗 Link de Demonstração

Para testar imediatamente, acesse a demo online: **https://furia-fan-bot-nm6g.vercel.app**

## 📖 Uso

No campo de texto, digite comandos ou perguntas, por exemplo:

- `Qual o maior título ganho pela FURIA?`
- `O que é FURIA?`

O chatbot responderá com informações geradas pelo modelo.

## 🛠️ Tecnologias

- **Front-end**: HTML5, CSS3, JavaScript
- **Back-end**: Node.js, Axios
- **Deploy**: Vercel (Serverless Functions)
- **IA**: OpenRouter (GPT-3.5-turbo)

## 🤝 Contribuições

Contribuições são bem-vindas! Para bugs e sugestões, abra uma issue ou envie um pull request.

---
*Projeto criado em Abril de 2025 por Caio Venâncio*
