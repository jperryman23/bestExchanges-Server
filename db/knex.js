const knex = require('knex')
const config = require('../knexfile')
console.log(config);

const environment = process.env.NODE_ENV ||'development'

const pg = require('knex')(config[environment])

module.exports = pg
