$(document).ready(function() {
    $('#tablaDatos').DataTable({
      "processing": true,
      "serverSide": false,
      "ajax": {
        "url": "https://sheets.googleapis.com/v4/spreadsheets/1jyzHFthvhOcBf9oDwA7XrkJ1ZS1wGtFZu7rHE0QbJD8/values/high_value!B37:J57?key=AIzaSyDD6wEmrY190Br80MQCrVDCYgZx4KJic_Y",
        "dataSrc": "values"
      },
      "columns": [
        { "data": 6 },
        { "data": 0 },
        { "data": 4 },
        { "data": 8 },
      ]
    });
  });