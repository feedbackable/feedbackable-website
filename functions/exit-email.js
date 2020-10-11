require("dotenv").config()

const to = require("../src/lib/to")
const parseBody = require("../src/lib/parseBody")
// const fs = require("fs").promises

const { authorize, updateValues } = require("../src/lib/sheetsAPI.js")

const {
  GOOGLE_SHEETS_SHEET_ID: SHEET_ID,
  GOOGLE_SHEETS_CREDENTIALS: CREDENTIALS,
} = process.env

function parseCredentials(rawCredentials) {
  try {
    return JSON.parse(rawCredentials)
  } catch (e) {
    return false
  }
}

exports.handler = async function (req) {
  if (!CREDENTIALS) {
    return { statusCode: 500, body: "Missing API credentials" }
  }
  if (!SHEET_ID) {
    return { statusCode: 500, body: "Missing sheet id" }
  }

  const body = parseBody(req.body)

  const range = body.range
  let row = null
  if (range) {
    row = range.match(/\d+$/)
  }

  const [authErr, authClient] = await to(
    authorize(parseCredentials(CREDENTIALS))
  )

  if (authErr) {
    return { statusCode: 500, body: authErr }
  }

  let err, result
  if (row) {
    ;[err, result] = await to(
      updateValues(authClient, {
        sheetId: SHEET_ID,
        range: `ExitSurvey!F${row}:G${row}`,
        values: [[body.name, body.email]],
      })
    )
  } else {
    // Even if we cant get the row, just append the data, don't want to lose the email
    ;[err, result] = await to(
      appendValues(authClient, {
        sheetId: SHEET_ID,
        range: "ExitSurvey!A:G",
        values: [[null, null, null, null, null, body.name, body.email]],
      })
    )
  }

  if (err) {
    return { statusCode: 500, body: err }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result.data),
  }
}
