const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
// const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const fetch = require('node-fetch')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const COINCAP_URL = 'http://coincap.io/page/'



router.get('/',(req, res)=>{

//res.send("coincap is working got to this site for dope async-await and promiseall syntax https://javascript.info/promise-api");


// REQUEST METHOD


// request('http://coincap.io/page/ETH', function(err, result, body) {
//    // console.log(body);
//     const data = JSON.parse(body);
//     res.send(data);
//     console.log(data["price_eth"])
// });


// NODE-FETCH METHOD

fetch(COINCAP_URL + 'ETH')
    .then(r => r.json())
    .then(data => {
        let eth = 'BTC Price: $' + data.btcPrice.toFixed(3) + ' alt_name: ' + data.display_name + ' rate: ' + data.price_btc.toFixed(3) + ' ETH_USD: $' + data.price_usd.toFixed(3);
        // const eth = {
        //     btc_usd: data.btcPrice.toFixed(3),
        //     alt_name: data.display_name,
        //     rate: data.price_btc.toFixed(3),
        //     alt_usd: data.price_usd.toFixed(3),
        //     date: date
        //   }
        // })
        res.send(eth)
    })
    .catch(err => {
        console.log(err)
    })

// data.btcPrice
// data.display_name
// data.price_btc
// data.price_usd


    	// fetch(COINCAP_URL + 'ETH')
    	//     .then(function(res) {
    	//         return res.json();
    	//     }).then(function(json) {
    	//         res.send(json);
    	//     });


// ASYNC AWAIT METHOD

  // (async function () {
  //     const res = await fetch('http://coincap.io/page/ETH');
  //     const json = await res.json();
  //     console.log(json);
  //
  //   })


})


module.exports = router;
