$(document).ready(function() {
    // ID de la hoja de cálculo de Google
    var spreadsheetId = "2Ics3_0r1pbWqmK0pbKZ-1KObviEnz9De5TUS7o";
  
    // Nombre de la hoja de cálculo
    var sheetName = "TEXTO";
  
    // Rango de la hoja de cálculo
    var range = "C24:H39";
  
    // URL de la API de Google Sheets
    var url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "/values/" + sheetName + "!" + range;
  
    // Opciones de DataTables
    var options = {
      // Filtro de búsqueda
      searching: true,
  
      // Filtro para ordenar
      ordering: true,
  
      // Columnas de la tabla
      columns: [
        { title: "Contrato" },
        { title: "Vto" },
        { title: "Precio" },
        { title: "Px/spot" },
        { title: "TEA" },
        { title: "Proyectado" }
      ]
    };
  
    // Obtener los datos de la hoja de cálculo de Google
    $.getJSON(url, function(data) {
      // Crear un array con los datos de la hoja de cálculo
      var dataArray = [];
  
      // Recorrer los datos de la hoja de cálculo y añadirlos al array
      $.each(data.values, function(index, value) {
        dataArray.push(value);
      });
  
      // Crear la tabla con DataTables
      $("#tabla").DataTable({
        data: dataArray,
        // Asignar las opciones de DataTables
        ...options
      });
    });
  });
  