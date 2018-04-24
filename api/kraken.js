
// EXAMPLES FROM CAPSTONE PROJECT

// (READ) GET REQUEST - Contacts
// app.get('/api/contacts', (req, res, next) => {
//     contacts.find({})
//     .then(function(contacts){
//         res.json(contacts);
//     })
//     .catch(function(err){
//         res.json(err)
//     })
// });


// (READ) GET REQUEST - Properties
// app.get('/api/properties', (req, res, next) => {
//     properties.find({})
//     .then(function(properties){
//         res.json(properties);
//     })
//     .catch(function(err){
//         res.json(err)
//     })
// });

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
  res.send("KRAKEN API is working");
})

module.exports = router;
