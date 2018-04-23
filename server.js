const express = require('express');
require('dotenv').config()
const path = require('path');
// const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const logger = require('morgan');
// const pg = require('./db/knex')
const router = express.Router();
const https = require('https');
const request = require('request');
const cors = require('cors');


// var url = require('url')
// const ezc = require('express-zero-config');
// const router = ezc.createRouter();
// const fetch = require('node-fetch');
// const inserts = require('../db/queries');


const app = express();

//MIDDLE WARE


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cookieParser());

// app.use(cors({
//   origin: 'https://s3-us-west-1.amazonaws.com',
//   optionsSuccessStatus: 200
// }));

app.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}));



app.get('/', (req, res) => {
  res.send('Hello Jules!')
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`server running on port ${port}`);

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: res.locals.error = req.app.get('env') === 'development' ? err : {}
  })
});

module.exports = app;
