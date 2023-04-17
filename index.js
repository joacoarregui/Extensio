$(document).ready(function() {
    var table = $('#tablaDatos').DataTable({
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
      ],
      "dom": 'R<"table-filter-container"r><"table-scrollable"t><"table-footer"ip>',
      "colReorder": true,
      "fixedColumns": {
        "leftColumns": 0,
        "rightColumns": 0
      }
    });
    
    // Agregar filtros independientes a cada columna
    $('.tabla_high_value thead tr.table-filters').each(function () {
      $(this).clone(true).appendTo('.tabla_high_value thead');
    });
    $('.tabla_high_value thead tr.table-filters:eq(1) th').each(function(i) {
      var title = $(this).text();
      $(this).html('<input type="text" placeholder="Buscar ' + title + '" />');
 
      $('input', this).on('keyup change', function() {
        if (table.column(i).search() !== this.value) {
          table
            .column(i)
            .search(this.value)
            .draw();
        }
      });
    });
  });