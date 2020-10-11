require("dotenv").config()

const to = require("../src/lib/to")
const parseBody = require("../src/lib/parseBody")
// const fs = require("fs").promises

const { authorize, appendValues } = require("../src/lib/sheetsAPI.js")

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

  // console.log({ body })

  const [authErr, authClient] = await to(
    authorize(parseCredentials(CREDENTIALS))
  )

  if (authErr) {
    return { statusCode: 500, body: authErr }
  }

  const [appendErr, appendResult] = await to(
    appendValues(authClient, {
      sheetId: SHEET_ID,
      range: "ExitSurvey!A:G",
      values: [
        [
          new Date(),
          body.reasons.join(", "),
          body.otherReason,
          body.selectedPlan ? body.selectedPlan : "",
          body.selectedPrice ? body.selectedPrice : "",
        ],
      ],
    })
  )

  // console.log(appendResult)

  if (appendErr) {
    return { statusCode: 500, body: appendErr }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(appendResult.data), // .updates.updatedRange
  }
}
