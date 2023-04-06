from google.oauth2 import service_account
from googleapiclient.discovery import build

# Autenticación
creds = service_account.Credentials.from_service_account_file('credentials.json')
service = build('sheets', 'v4', credentials=creds)

# ID de la hoja de Google, nombre y rango de la hoja que se quiere obtener
spreadsheet_id = '1jyzHFthvhOcBf9oDwA7XrkJ1ZS1wGtFZu7rHE0QbJD8'
sheet_name = 'Agresivo'
range_name = 'T6:X12'

# Obtener los datos de la hoja de Google
result = service.spreadsheets().values().get(spreadsheetId=spreadsheet_id, range=f'{sheet_name}!{range_name}').execute()
data = result.get('values', [])

# Generar la tabla HTML
html_table = '<table>\n'
html_table += '<tr><th>Ticker</th><th>Nombre</th><th>porcentaje en Cartera</th><th>Sector</th><th>Industria</th></tr>\n'

for row in data:
    html_table += f'<tr><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td></tr>\n'

html_table += '</table>'
