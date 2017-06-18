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
var TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json';
console.log(TOKEN_PATH);
// SheetsArray to be used for below routing of URL
var sheetsArray;

// fnOne, fnTwo and fnThree are callbacks
// Load client secrets from a local file.
// fnOne, fnTwo and fnThree are callbacks
// Load client secrets from a local file.
function retrieveSheets(fnOne, urlRoute) {

  switch (urlRoute) {
    case 'cover-photo':
      sheetsArray = ['CoverPhoto!A2:D'];
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
    case 'stones':
      sheetsArray = ['StonesEtc!A2:C'];
      break;
    case 'completedAndFutureProjects':
      sheetsArray = ['CompletedAndFutureProjects!A2:C'];
      break;
    case 'plants__adenium':
      sheetsArray = ['Plants__Adenium!A2:D'];
      break;
    case 'plants__agave-portrait':
      sheetsArray = ['Plants__Agave-portrait!A2:D'];
      break;
    case 'plants__agave-landscape':
      sheetsArray = ['Plants__Agave-landscape!A2:D'];
      break;
    case 'plants__aglaonemas-portrait':
      sheetsArray = ['Plants__Aglaonemas-portrait!A2:D'];
      break;
    case 'plants__aglaonemas-landscape':
      sheetsArray = ['Plants__Aglaonemas-landscape!A2:D'];
      break;
    case 'plants__alocasia-portrait':
      sheetsArray = ['Plants__Alocasia-portrait!A2:D'];
      break;
    case 'plants__alocasia-landscape':
      sheetsArray = ['Plants__Alocasia-landscape!A2:D'];
      break;
    case 'plants__ananas-portrait':
      sheetsArray = ['Plants__Ananas-portrait!A2:D'];
      break;
    case 'plants__ananas-landscape':
      sheetsArray = ['Plants__Ananas-landscape!A2:D'];
      break;
    case 'plants__aquatic-portrait':
      sheetsArray = ['Plants__Aquatic-plants-portrait!A2:D'];
      break;
    case 'plants__aquatic-landscape':
      sheetsArray = ['Plants__Aquatic-plants-landscape!A2:D'];
      break;
    case 'plants__bamboos-portrait':
      sheetsArray = ['Plants__Bamboos-portrait!A2:D'];
      break;
    case 'plants__bamboos-landscape':
      sheetsArray = ['Plants__Bamboos-landscape!A2:D'];
      break;
    case 'plants__bougainvilleas-portrait':
      sheetsArray = ['Plants__Bougainvilleas-portrait!A2:D'];
      break;
    case 'plants__bougainvilleas-landscape':
      sheetsArray = ['Plants__Bougainvilleas-landscape!A2:D'];
      break;
    case 'plants__bowenia-portrait':
      sheetsArray = ['Plants__Bowenia-portrait!A2:D'];
      break;
    case 'plants__bowenia-landscape':
      sheetsArray = ['Plants__Bowenia-landscape!A2:D'];
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
