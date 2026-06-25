// Helper for API key (dotenv). Not actively used by the main site.
// The active Google Sheets data loading uses the hardcoded key directly in HTML.
// Kept for potential future backend use. Does not expose or change any live API calls.
require('dotenv').config();

const apiKey = process.env.API_KEY;
console.log(apiKey);
function getApiKey() {
  return apiKey;
}
