require('dotenv').config();

const apiKey = process.env.API_KEY;
console.log(apiKey);
function getApiKey() {
  return apiKey;
}