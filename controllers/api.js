// Get dependencies
const express = require('express');
const router = express.Router();

// ROOT
router.get('/', (req, res) => {
  res.send('api works');
});

// Home page
// router.get('/home/:landing', (req, res) => {
// question - home landing means once landed on home page
router.get('/home/:landing', (req, res) => {
  console.log('entered /home route');
  // pass callback function into api call to return data
  // function parameter api landing data - fnOne
  // function parameter req.params.landing - urlRoute
  retrieveSheets(function (apiLandingData) {
    res.json({
      'apiLandingResult': apiLandingData
    });
  }, req.params.landing);
});

// GOOGLE SHEETS API CALL
var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'dowflora-credentials.json';
console.log(TOKEN_PATH);
// SheetsArray to be used for below routing of URL
var sheetsArray;

// fnOne, fnTwo and fnThree are callbacks
// Load client secrets from a local file.
// fnOne, fnTwo and fnThree are callbacks
// Load client secrets from a local file.
function retrieveSheets(fnOne, urlRoute) {

  switch (urlRoute) {
    case 'carousel-photo':
      sheetsArray = ['CarouselPhoto!A2:E'];
      break;
    case 'lingga':
      sheetsArray = ['Lingga!A2:C'];
      break;
    case 'plants':
      sheetsArray = ['Plants!A2:C'];
      break;
    case 'seeds':
      sheetsArray = ['Seeds!A2:C'];
      break;
    case 'growingMediaAndCharcoals':
      sheetsArray = ['GrowingMediaAndCharcoals!A2:C'];
      break;
    case 'charcoals':
      sheetsArray = ['Charcoals!A2:E'];
      break;
    case 'stones':
      sheetsArray = ['StonesEtc!A2:E'];
      break;
    case 'pebble':
      sheetsArray = ['PebblesEtc!A2:E'];
      break;
    case 'completedAndFutureProjects':
      sheetsArray = ['CompletedAndFutureProjects!A2:C'];
      break;
    case 'plants__adenium':
      sheetsArray = ['Plants__Adenium!A2:E'];
      break;
    case 'plants__agave':
      sheetsArray = ['Plants__Agave!A2:E'];
      break;
    case 'plants__aglaonemas':
      sheetsArray = ['Plants__Aglaonemas!A2:E'];
      break;
    case 'plants__alocasia':
      sheetsArray = ['Plants__Alocasia!A2:E'];
      break;
    case 'plants__ananas':
      sheetsArray = ['Plants__Ananas!A2:E'];
      break;
    case 'plants__aquaticPlants':
      sheetsArray = ['Plants__Aquatic-plants!A2:E'];
      break;
    case 'plants__bamboosGrasses':
      sheetsArray = ['Plants__Bamboos!A2:E'];
      break;
    case 'plants__bougainvilleas':
      sheetsArray = ['Plants__Bougainvilleas!A2:E'];
      break;
    case 'plants__bowenia':
      sheetsArray = ['Plants__Bowenia!A2:E'];
      break;
    case 'plants__cactus':
      sheetsArray = ['Plants__Cactus!A2:E'];
      break;
    case 'plants__caladium':
      sheetsArray = ['Plants__Caladium!A2:E'];
      break;
    case 'plants__calatheas':
      sheetsArray = ['Plants__Calatheas!A2:E'];
      break;
    case 'plants__climbersVines':
      sheetsArray = ['Plants__Climbers-vine!A2:E'];
      break;
    case 'plants__cordyLine':
      sheetsArray = ['Plants__Cordyline!A2:E'];
      break;
    case 'plants__costus':
      sheetsArray = ['Plants__Costus!A2:E'];
      break;
    case 'plants__croton':
      sheetsArray = ['Plants__Croton!A2:E'];
      break;
    case 'plants__crypthanthus':
      sheetsArray = ['Plants__Crypthanthus!A2:E'];
      break;
    case 'plants__cycas':
      sheetsArray = ['Plants__Cycas!A2:E'];
      break;
    case 'plants__dracaeana':
      sheetsArray = ['Plants__Dracaeana!A2:E'];
      break;
    case 'plants__encephalartos':
      sheetsArray = ['Plants__Encephalartos!A2:E'];
      break;
    case 'plants__ferns':
      sheetsArray = ['Plants__Ferns!A2:E'];
      break;
    case 'plants__flowers':
      sheetsArray = ['Plants__Flowers!A2:E'];
      break;
    case 'plants__groundCovers':
      sheetsArray = ['Plants__Ground-covers!A2:E'];
      break;
    case 'plants__hangingPlants':
      sheetsArray = ['Plants__Hanging-plants!A2:E'];
      break;
    case 'plants__heliconia':
      sheetsArray = ['Plants__Heliconia!A2:E'];
      break;
    case 'plants__herbs':
      sheetsArray = ['Plants__Herbs!A2:E'];
      break;
    case 'plants__hibiscus':
      sheetsArray = ['Plants__Hibiscus!A2:E'];
      break;
    case 'plants__indoorPlants':
      sheetsArray = ['Plants__Indoor-plants!A2:E'];
      break;
    case 'plants__otherSpecies':
      sheetsArray = ['Plants__Other-species!A2:E'];
      break;
    case 'plants__palms':
      sheetsArray = ['Plants__Palms!A2:E'];
      break;
    case 'plants__pandanus':
      sheetsArray = ['Plants__Pandanus!A2:E'];
      break;
    case 'plants__philodendrons':
      sheetsArray = ['Plants__Philodendrons!A2:E'];
      break;
    case 'plants__plumerias':
      sheetsArray = ['Plants__Plumerias!A2:E'];
      break;
    case 'plants__saggoPalm':
      sheetsArray = ['Plants__Saggo-palms!A2:E'];
      break;
    case 'plants__shrubs':
      sheetsArray = ['Plants__Shrubs!A2:E'];
      break;
    case 'plants__strelizia':
      sheetsArray = ['Plants__Strelizia!A2:E'];
      break;
    case 'plants__succulentPlants':
      sheetsArray = ['Plants__Succulent-Plants!A2:E'];
      break;
    case 'plants__trees':
      sheetsArray = ['Plants__Trees!A2:E'];
      break;
    case 'plants__tropicalFruits':
      sheetsArray = ['Plants__Tropical-Fruits!A2:E'];
      break;
    case 'plants__zamiaCeratozamia':
      sheetsArray = ['Plants__Zamia-Ceratozamia!A2:E'];
      break;
  }

  fs.readFile('./secret/client_secret.json', function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Google Sheets API.
    authorize(JSON.parse(content), listMajors, fnOne);
  });
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback, fnOne) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function (err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client, fnOne);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function (code) {
    rl.close();
    oauth2Client.getToken(code, function (err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 *https://docs.google.com/spreadsheets/d/1vSK20rCOrGkkhRv5ZrqIQuJDeAbemeYn4K1HvXH-Ec0/edit#gid=0
 */
function listMajors(auth, fnOne) {
  var sheets = google.sheets('v4');
  // sheets.spreadsheets.values.get({ // this gets single sheet
  sheets.spreadsheets.values.batchGet({ // this gets multiple sheets
    auth: auth,
    spreadsheetId: '1vSK20rCOrGkkhRv5ZrqIQuJDeAbemeYn4K1HvXH-Ec0',
    ranges: sheetsArray, // if get multiple sheets need to use 'ranges'. if single sheet use 'range'
    // question -- Google sheets APIL Value render option?
    valueRenderOption: 'FORMATTED_VALUE'

  }, function (err, response) {
    console.log('see here for response', response);
    console.log('batch get success');

    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var googleSheetsHomeData = [];
    for (var i = 0; i < response.valueRanges.length; i++) {
      googleSheetsHomeData.push(response.valueRanges[i].values);
    }

    console.log('logging googleSheetsHomeData', googleSheetsHomeData);
    fnOne(googleSheetsHomeData);
  });
}

module.exports = router;
