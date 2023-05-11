require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const app = express();

dotenv.config();

app.use(express.static('public'));

app.get('/api/tabla_usd_largo_plazo_local', async (req, res) => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1JJf7z5h9-RiJr0rWUpGpdTQPBfIslbyNXtIurq1660s/values/FCI TABLAS USD!D83:I102?key=${process.env.API_KEY}`
    );
    res.json(response.data.values);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos de la tabla');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
