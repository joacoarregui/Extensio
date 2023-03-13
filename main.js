// Variables de configuración
const CLIENT_ID = 'AIzaSyAoEhAcU81FRzaTRFwU4RJt_9GCec0HZGg';
const SPREADSHEET_ID = '2Ics3_0r1pbWqmK0pbKZ-1KObviEnz9De5TUS7o';
const RANGE = 'TEXTO!C28:H39';

// Cargar la API de Google Sheets
gapi.load('client', () => {
  gapi.client.init({
    clientId: CLIENT_ID,
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
  }).then(() => {
    // Obtener los datos de la hoja de cálculo
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE
    }).then(response => {
      const data = response.result.values;
      const tbody = document.querySelector('#datos tbody');

      // Recorrer los datos y crear las filas de la tabla
      data.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      // Inicializar la tabla con DataTables
      $(document).ready(() => {
        $('#datos').DataTable();
      });
    });
  });
});