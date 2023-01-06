
const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1SJPq2Ics3_0r1pbWqmK0pbKZ-1KObviEnz9De5TUS7o/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function data_api_contratos_rofex(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1SJPq2Ics3_0r1pbWqmK0pbKZ-1KObviEnz9De5TUS7o',
    range: 'TEXTO!C28:H40',
  });
  const rows_contratos_rofex = res.data.values;
  if (!rows_contratos_rofex || rows_contratos_rofex.length === 0) {
    console.log('No data found.');
    return res.JSON();
  }
    const values_contratos_rofex= res.data.values;
      console.log(values_contratos_rofex);
    
  rows_contratos_rofex.forEach((row) => {
   console.log(`${row[0]}, ${row[1]},  ${row[2]},  ${row[3]},  ${row[4]}, ${row[5]}`);
   });  


}
authorize().then(data_api_contratos_rofex).catch(console.error);

