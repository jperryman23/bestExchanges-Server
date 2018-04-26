const express = require('express');
require('dotenv').config()
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const logger = require('morgan');
const pg = require('./db/knex')
const fetch = require('node-fetch')
// const https = require('https');
const request = require('request');
const cors = require('cors');


// var url = require('url')
// const fetch = require('node-fetch');
// const inserts = require('../db/queries');
bcypher = require('blockcypher');

const app = express();
const router = express.Router();
//MIDDLE WARE

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}));

// FOR HOSTING ON AWS
// app.use(cors({
//   origin: 'https://s3-us-west-1.amazonaws.com',
//   optionsSuccessStatus: 200
// }));

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`server running on port ${port}`);

})

// API's
const bittrex = require('./api/bittrex');
const coincap = require('./api/coincap');
const historical = require('./api/historical');
const kraken = require('./api/kraken');
const poloniex = require('./api/poloniex');



//Mount the router
// const router = express.Router();


// app.use('/routes/poloOrders', poloOrders)
app.use('/api/bittrex', bittrex);
app.use('/api/coincap', coincap);
app.use('/api/historical', historical);
app.use('/api/kraken', kraken);
app.use('/api/poloniex', poloniex);



// Test to see if rendering on /
app.get('/', (req, res) => {
  res.send('Hello Jules!')
});



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
