// LEGACY / BROKEN - NOT THE ACTIVE DATA LOADER
// This file attempts to use gapi for Google Sheets but is not loaded on most pages.
// The real (working) data loading for FCI, dólar, etc. is done inline in the HTML files
// using direct fetch / gviz with the active API key.
// DO NOT REMOVE the active API calls in the HTML pages.
// This script has incorrect CLIENT_ID (using an API key) and invalid spreadsheet ID.

console.warn('[main.js] Legacy script - not active. Real Sheets data is loaded from HTML inline scripts.');

/* Original code preserved below for reference (commented to prevent errors)
const CLIENT_ID = 'AIzaSyAoEhAcU81FRzaTRFwU4RJt_9GCec0HZGg';
const SPREADSHEET_ID = '2Ics3_0r1pbWqmK0pbKZ-1KObviEnz9De5TUS7o';
const RANGE = 'TEXTO!C28:H39';

// ... (rest of original gapi code commented to avoid runtime errors)
*/