require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser').json()
const authRouter = require("./routes/auth")
const customersRouter = require("./routes/customers")

const app = express();

app.use(cors())
app.use('/api/auth', bodyParser, authRouter(app))
app.use('/api/customers', bodyParser, customersRouter(app))

app.get('/', (req, res, next) => {
  try {
    res
      .status(200)
      .json({
        message: 'Welcome to OAF Server',
      });
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = app;