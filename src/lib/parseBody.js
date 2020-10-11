const parseBody = body => {
  try {
    return JSON.parse(body)
  } catch (e) {
    return {}
  }
}

module.exports = parseBody
