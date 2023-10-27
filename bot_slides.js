const { google } = require('googleapis');
const slides = google.slides('v1');

async function main() {
  // Autenticación
  const auth = await authorizeWithServiceAccount();

  // ID de la presentación
  const presentationId = '1EfM-DXU7OmDxK8kefE8EmjmKHI_xDcqQ4zJJv1so8Zk';

  // Actualiza tus diapositivas aquí
  // ...

  // Descarga las diapositivas en formato PNG
  await downloadSlidesAsPNG(presentationId, auth);
}

async function authorizeWithServiceAccount() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials_slides.json', 
    scopes: ['https://www.googleapis.com/auth/presentations'],
  });
  return auth.getClient();
}

async function downloadSlidesAsPNG(presentationId, auth) {
  // Verifica que la presentación exista
  const response = await slides.presentations.get({
    id: presentationId,
    auth,
  });

  if (!response.data) {
    throw new Error('La presentación no existe');
  }

  // Descarga las diapositivas
  const slidesToExport = [1, 2, 3, 4]; // Cambia esto a las diapositivas que deseas exportar.

  for (const slideIndex of slidesToExport) {
    const response = await slides.presentations.pages.get({
      presentationId,
      pageObjectId: `g${slideIndex}`,
      auth,
    });

    const imageUrl = response.data.pageElements[0].image.imageUri;
    // Descarga la imagen y guárdala como PNG
    // ...
  }
}

main();