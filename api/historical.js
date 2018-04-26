
const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();


router.get('/', (req, response, next) => {

  publicClient.getProductHistoricRates('ETH-BTC', { granularity: 86400 }).then(rates => {
    response.json(rates) //{60, 300, 900, 3600, 21600, 86400} //  1hr 6hr 24hr
})
})

module.exports = router;
