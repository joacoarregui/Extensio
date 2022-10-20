function doGet() {

  const libro= SpreadsheetApp.openById("1SJPq2Ics3_0r1pbWqmK0pbKZ-1KObviEnz9De5TUS7o");
  const hoja=libro.getSheetByName("TEXTO");
  const data = hoja.getRange("C28:H40").getValues();
  console.log (data);

  const texto1 = hoja.getRange(2,2).getValue();
  console.log (texto1);

  var template=HtmlService.createTemplateFromFile("index");
  //prueba desde APPSCRIPT
  template.data=data;  
  template.texto1=texto1;
  
  var output = template.evaluate();
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return output; 
}
//estamos ok
function getRecords()
{
  var ss= SpreadsheetApp.openById("1SJPq2Ics3_0r1pbWqmK0pbKZ-1KObviEnz9De5TUS7o");
  var recordsSheet = ss.getSheetByName("TEXTO");
  var recordsRange = recordsSheet.getRange("C28:I40");
  var recordsValues = recordsRange.getValues();  
  return recordsValues;

}