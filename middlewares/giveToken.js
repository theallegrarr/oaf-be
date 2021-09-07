const jwt = require('jsonwebtoken')
require('dotenv').config()

function createToken(user) {
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: '1y'
  }
  const result = jwt.sign(
    payload,
    process.env.SECRET,
    options
  )

  return result
}

module.exports = createToken;