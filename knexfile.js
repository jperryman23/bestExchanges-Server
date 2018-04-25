// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/best-exchange'
  },

  test: {
  client: 'pg',
  connection: 'postgres://localhost/test-combined-order-book'
},

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL
  // }

};
