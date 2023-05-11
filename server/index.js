require('dotenv').config();
const { google } = require('googleapis');

// ...
console.log(process.env);
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
});

const sheets = google.sheets({ version: 'v4', auth });

const spreadsheetId = '1JJf7z5h9-RiJr0rWUpGpdTQPBfIslbyNXtIurq1660s';
const range = 'FCI TABLAS USD!D83:I102';

app.get('/valores/tabla_usd_largo_plazo_local', async (req, res) => {
  console.log('Endpoint llamado');
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`;
    const response = await axios.get(url);
    console.log(response.data); // Verificar si la respuesta contiene los datos esperados

    const responseSheets = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range
    });
    console.log(responseSheets.data); // Verificar si la respuesta de Google Sheets contiene los datos esperados

    res.json(response.data);
  } catch (error) {
    console.error(error);
    console.log(error.response.data);
    res.status(500).send('Error al obtener los datos de la tabla');
  }
});