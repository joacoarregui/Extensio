$(document).ready(function() {
    $('#tablaDatos').DataTable({
      "processing": true,
      "serverSide": false,
      "ajax": {
        "url": "https://sheets.googleapis.com/v4/spreadsheets/1jyzHFthvhOcBf9oDwA7XrkJ1ZS1wGtFZu7rHE0QbJD8/values/high_value!B37:J57?key=API_KEY",
        "dataSrc": "values"
      },
      "columns": [
        { "data": 6, "searchable": true },
        { "data": 0, "searchable": true },
        { "data": 4, "searchable": true },
        { "data": 8, "searchable": true }
      ]
    });
  });