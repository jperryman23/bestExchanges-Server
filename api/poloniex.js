const express = require('express');
const router = express.Router();
// const queries = require('../db/queries');
// const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// TEST ROUTE OK
router.get('/', (req, res) => {
    res.send("poloniex api route working")
    })



module.exports = router;
