const { google } = require('googleapis');
const slides = google.slides('v1');

async function main() {
  // Autenticación
  const auth = await authorizeWithServiceAccount({
    keyFile: 'credentials_slides.json',
    scopes: ['https://www.googleapis.com/auth/presentations'],
    apiKey: 'AIzaSyBoJhzZy7ZgVwy3FKZ800OcsoFvSwqpkcQ',
  });

  // ID de la presentación
  const presentationId = '1EfM-DXU7OmDxK8kefE8EmjmKHI_xDcqQ4zJJv1so8Zk';

  // Descarga las diapositivas
  const response = await slides.presentations.get({
    presentationId,
    auth: auth,
  });

  if (!response.data) {
    throw new Error('La presentación no existe');
  }

  // Actualiza las diapositivas
  const updatedBody = response.data.body;

  // Actualiza las tablas
  for (const table of updatedBody.tables) {
    table.values = [
      ['Nueva fila 1', 'Nueva columna 1'],
      ['Nueva fila 2', 'Nueva columna 2'],
    ];
  }

  // Actualiza los textos
  for (const text of updatedBody.texts) {
    text.text = 'Texto actualizado';
  }

  // Actualiza los gráficos vinculados
  for (const graphic of updatedBody.graphics) {
    graphic.data = {
      series: [
        {
          data: [1, 2, 3, 4, 5],
        },
      ],
    };
  }

  // Actualiza la diapositiva
  await slides.presentations.pages.update({
    presentationId,
    pageObjectId: `g1`,
    body: updatedBody,
    auth: auth,
  });
}

// Llama a la función main para iniciar el proceso
main();
