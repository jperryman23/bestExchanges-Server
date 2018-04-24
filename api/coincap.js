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


router.get('/',(req, res)=>{
  res.send("coincap is working got to this site for dope async-await and promiseall syntax https://javascript.info/promise-api");
})

module.exports = router;
