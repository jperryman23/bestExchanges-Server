const express = require('express');
const router = express.Router();
// const queries = require('../db/queries');
const https = require('https');
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

// router.get('/', (req, res) => {
//     	fetch('https://www.reddit.com/r/funny.json')
//     	    .then(function(res) {
//     	        return res.json();
//     	    }).then(function(json) {
//     	        res.json(json);
//     	    });
//     });


module.exports = router;
