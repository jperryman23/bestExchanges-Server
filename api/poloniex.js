const express = require('express');
const router = express.Router();
// const queries = require('../db/queries');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const fetch = require('node-fetch');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// TEST ROUTE OK
// router.get('/', (req, response, next) => {
//     response.send("poloniex api route working")
//     })

let POLO_URL = 'https://poloniex.com/public?command=returnTicker'

router.get('/', (req, res, next) => {
    	fetch(POLO_URL)
    	    .then(function(res) {
    	        return res.json();
    	    }).then(function(json) {
    	       var data = json;
              var dashPrice = data.BTC_DASH.last
              var dashFormatted = dashPrice.toFixed(2)
              console.log(dashFormatted);
            // res.send(dashFormatted);
    	    });
    });


module.exports = router;
