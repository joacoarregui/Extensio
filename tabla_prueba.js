// Obtener los elementos de la tabla
const tableBody = document.getElementById('tableBody');

// Función para crear la tabla HTML y mostrar los datos
function createTable(data) {
  // Crear una fila de encabezado
  const headerRow = document.createElement('tr');
  const headers = ['Ticker', 'Nombre', 'Mercado Bursatil', 'País'];
  for (let i = 0; i < headers.length; i++) {
    const headerCell = document.createElement('th');
    headerCell.textContent = headers[i];
    headerRow.appendChild(headerCell);
  }
  tableBody.appendChild(headerRow);

  // Crear filas de datos
  for (let i = 0; i < data.length; i++) {
    const dataRow = document.createElement('tr');
    for (let j = 0; j < data[i].length; j++) {
      const dataCell = document.createElement('td');
      dataCell.textContent = data[i][j];
      dataRow.appendChild(dataCell);
    }
    tableBody.appendChild(dataRow);
  }
}

// Función para filtrar los datos de la tabla
function filterTable() {
  // Obtener los términos de búsqueda y la opción de filtro seleccionada
  const searchTerm = searchInput.value.toLowerCase();
  const filterTerm = filterSelect.value.toLowerCase();

  // Recorrer todas las filas de la tabla y ocultar las que no coincidan con los criterios de búsqueda
  for (let i = 1; i < tableBody.rows.length; i++) {
    const row = tableBody.rows[i];
    let match = false;

    // Obtener el valor correspondiente al criterio de filtro seleccionado
    let cellValue = '';
    switch (filterTerm) {
      case 'ticker':
        cellValue = row.cells[0].textContent.toLowerCase();
        break;
      case 'mercado Bursatil':
        cellValue = row.cells[1].textContent.toLowerCase();
        break;
      case 'país':
        cellValue = row.cells[3].textContent.toLowerCase();
        break;
      default:
        cellValue = '';
        break;
    }

    // Verificar si la fila coincide con los criterios de búsqueda
    if (cellValue.indexOf(searchTerm) > -1) {
      match = true;
    }

    // Mostrar u ocultar la fila según si coincide o no con los criterios de búsqueda
    if (match) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }
}

// Función para resetear la tabla y el formulario
function resetTable() {
  searchInput.value = '';
  filterSelect.value = '';
  for (let i = 1; i < tableBody.rows.length; i++) {
    tableBody.rows[i].style.display = '';
  }
}

// Cargar la biblioteca de la API de Google Sheets
gapi.load('client', () => {
  gapi.client.init({
    apiKey: 'AIzaSyDD6wEmrY190Br80MQCrVDCYgZx4KJic_Y',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(() => {
    // Obtener los datos de la hoja de Google
    return gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1jyzHFthvhOcBf9oDwA7XrkJ1ZS1wGtFZu7rHE0QbJD8',
      range: 'D.USA!A3:D10',
    });
  }).
