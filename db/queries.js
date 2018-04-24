// const pg = require('./pg') the connection
const pg = require('./knex')

module.exports = {

  //     getAll(){
  //         return pg('bittrex_orderbook').select()
  //     }

  getAll() {
    return pg('coincap').select('*')
},



}
