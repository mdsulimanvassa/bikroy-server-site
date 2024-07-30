const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const usersRouter = require('./router/userRouter');

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000,
	limit: 5, 
    message: 'To many requests from this IP. pleace try again later'
})

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(xss());
app.use(limiter);
app.use(cookieParser())

app.use('/api',usersRouter);

app.get('/', (req, res) => {
  res.send('hellow ')
})

app.use( (req, res, next) => {
    next(createError(404, 'route not found.'))
  });

  app.use( (err, req, res, next) => {
    return res.status(err.status || 500)
    .json({
      success: false,
      message: err.message
    })
  });

  module.exports = app;