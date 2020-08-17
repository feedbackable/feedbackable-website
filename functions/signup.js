require("dotenv").config()

const sendpulse = require("sendpulse-api")
const to = require("../src/lib/to")

const API_USER_ID = process.env.SENDPULSE_API_USER_ID
const API_SECRET = process.env.SENDPULSE_API_SECRET
const TOKEN_STORAGE = "/tmp/"
const LIST_ID = process.env.SENDPULSE_LIST_ID

const parseBody = body => {
  try {
    return JSON.parse(body)
  } catch (e) {
    return {}
  }
}

exports.handler = async function (req) {
  if (!API_USER_ID || !API_SECRET) {
    return { statusCode: 500, body: "Missing API credentials" }
  }

  const body = parseBody(req.body)

  if (!body.email || !body.email.match(/[^@]+@[^\.]+\..+/)) {
    return {
      statusCode: 500,
      body: "Invalid email",
    }
  }

  //GEt a token
  const [tokenErr, token] = await to(
    new Promise((resolve, reject) => {
      sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, function (token) {
        if (token && token.is_error) {
          reject(token)
        }
        resolve(token)
      })
    })
  )

  if (tokenErr) {
    return { statusCode: 500, body: tokenErr.message || "Failed to get token" }
  }

  const [addErr, addSuccess] = await to(
    new Promise((resolve, reject) => {
      sendpulse.addEmails(resolve, LIST_ID, [
        {
          email: body.email,
          variables: {
            //plan: "standard",
            //url: "example.com",
          },
        },
      ])
    })
  )

  if (addErr) {
    console.error(addErr)
    return { statusCode: 500, body: addErr.message || "Failed to add address" }
  }

  return {
    statusCode: 200,
    body: "ok",
  }
}
