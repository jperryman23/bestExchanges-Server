const express = require('express');
const router = express.Router();
// const queries = require('../db/queries');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const fetch = require('node-fetch')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const BITTREX_URL="https://bittrex.com/api/v1.1/public/getmarketsummaries/"

router.get('/',(req, res, next)=>{
  // res.send("BITTREX API is working");

  fetch(BITTREX_URL)
      .then(r => r.json())
      .then(data => {

        let latestPrices = {
        USDT_BTC: data.result[259].Ask,
        BTC_ETH:  data.result[57].Ask,
        BTC_LTC:  data.result[89].Ask,
        BTC_DASH: data.result[36].Ask
        }
        // const prices = data.result.map((result) =>{
        //   return {
        //     USDT_BTC: data.result[259].Ask.toFixed(2),
        //     BTC_ETH: data.result[57].Ask.toFixed(4),
        //     BTC_LTC: data.result[89].Ask.toFixed(4),
        //     BTC_DASH: data.result[36].Ask.toFixed(4),
        //   }
        // })
        // sends same thing a ton of times...dont even need to map it.
        console.log(latestPrices);
        // console.log(data.result[259]);
        // console.log(data.result[57].Ask) //ETH PRICE
        // console.log(data.result[89].Ask) //BTC_LTC
        // console.log(data.result[36].Ask) //DASH_LTC
        // console.log(data.result[259].Ask) //USDT_BTC
          res.send(latestPrices)
      })
      .catch(err => {
          console.log(err)
      })

})


module.exports = router;



// BITTREX ORDERBOOK API
// will run and update when you hit the route:
// http://localhost:5000/api/bittrex

// let url = 'https://bittrex.com/api/v1.1/public/getorderbook?&market=BTC-ETH&type=both';
//
// router.get('/', (req, response, next) => {
//
//     https.get(url, (res) => {
//         res.setEncoding('utf8');
//         let body = "";
//
//         res.on('data', (data) => {
//             body += data;
//         });
//         res.on('end', () => {
//             body = JSON.parse(body);
//             // response.json(body.result.buy)
//
//             const bittrexBids = body.result.buy.map((buy) => {
//                 return {
//                   type: 'bids',
//                   quantity: buy.Quantity,
//                   // rate: buy.Rate,
//                   rate: Number.parseFloat(buy.Rate).toFixed(8),
//                   exchange: 'bittrex'}
//             })
//
//             const bittrexAsks = body.result.sell.map((sell) => {
//                 return {
//                   type: 'asks',
//                   quantity: sell.Quantity,
//                   // rate: sell.Rate,
//                   rate:  Number.parseFloat(sell.Rate).toFixed(8),
//                   exchange: 'bittrex'}
//             })
//
//             const bittrexOrders = bittrexBids.concat(bittrexAsks);
//             console.log(bittrexOrders);
//
//             queries.deleteAllBittrex().then(() => {
//                 queries.addOrderBittrex(bittrexOrders).then((rows) => {
//                     response.json(rows)
//                 })
//             })
//
//         })
//     })
// });

//TICKER
// https://bittrex.com/api/v1.1/public/getticker
// Response
// {
// 	"success" : true,
// 	"message" : "",
// 	"result" : {
// 		"Bid" : 2.05670368,
// 		"Ask" : 3.35579531,
// 		"Last" : 3.35579531
// 	}
// }

// GET Market Summary / Volume

// https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc


// WOULD REQUIRE NPM PACKAGE

// bittrex.getticker( { market : 'BTC-LTC' }, function( data, err ) {
//   console.log( data );
// });

// bittrex.getorderbook({ market : 'BTC-LTC', depth : 10, type : 'both' }, function( data, err ) {
//   console.log( data );
// });


// module.exports = router;
