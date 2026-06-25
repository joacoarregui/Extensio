const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// NOTE: This backend proxy exists as an attempt to avoid exposing keys client-side.
// However, the active data display (FCI tables, dólar, etc.) still uses direct client-side calls
// with the API key in the browser (as requested to keep working exactly as-is).
// This server can be used later for a proper proxy if desired.

app.use(express.static('public'));

// Example proxy route (preserved - uses env key on server side)
app.get('/api/tabla_usd_largo_plazo_local', async (req, res) => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1IaDo-W3LL4F_SXnLZJ6GOCf4ey4ywwUWtCIL7kT2eBM/values/FCI%20TABLAS%20USD!E83:I102?key=${process.env.API_KEY}`
    );
    res.json(response.data.values);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos de la tabla');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
