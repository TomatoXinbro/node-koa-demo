const axios = require("axios");

const prompt = "Hello, how are you?";
const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

const apiKey = "<YOUR_API_KEY>"; // 替换为您的 API Key

axios
  .post(
    apiUrl,
    {
      prompt,
      max_tokens: 5,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  )
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
