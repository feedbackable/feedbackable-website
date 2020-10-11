// const fs = require("fs")
const { google } = require("googleapis")
const { GoogleToken } = require("gtoken")

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 */
async function authorize(credentials) {
  const oAuth2Client = new google.auth.OAuth2(credentials)

  const gtoken = new GoogleToken({
    email: credentials.client_email,
    scope: [
      // "https://www.googleapis.com/auth/spreadsheets.readonly",
      "https://www.googleapis.com/auth/spreadsheets",
    ], // or space-delimited string of scopes
    key: credentials.private_key,
  })

  try {
    const token = await gtoken.getToken()
    oAuth2Client.setCredentials(token)
    return oAuth2Client
  } catch (e) {
    throw e
  }

  // Check if we have previously stored a token.
  // fs.readFile(TOKEN_PATH, (err, token) => {
  //   if (err) return getNewToken(oAuth2Client, callback)
  //   oAuth2Client.setCredentials(JSON.parse(token))
  //   callback(oAuth2Client)
  // })
}

function appendValues(auth, { sheetId, values, range }) {
  const sheets = google.sheets({ version: "v4", auth })

  // let values = [
  //   [ // Row 1
  //     // Cell values ...
  //     "a",
  //     "b",
  //   ],
  // ]
  const resource = {
    values,
  }

  return sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    // spreadsheetId: "19yHMH3dBr_fPKkdwB7-izwwMe1ngRpqlJ1WKu3ouuoA",
    // range: "ExitSurvey!A:B",
    resource,
    valueInputOption: "RAW",
  })
}

function updateValues(auth, { sheetId, values, range }) {
  const sheets = google.sheets({ version: "v4", auth })

  const resource = {
    values,
  }

  return sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range,
    valueInputOption: "RAW",
    resource,
  })
}

module.exports = {
  authorize,
  appendValues,
  updateValues,
}
