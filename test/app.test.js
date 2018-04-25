const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');
const app = require('../server')


describe('CRUD Orderbook', () =>{
    before((done)=>{
        // run migrations
        knex.migrate.latest()
            .then(() =>{
                //run seeds
                return knex.seed.run()
            }).then(() => done());
    });

})
