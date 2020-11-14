require('dotenv').config();
const knex = require('knex');

const db = knex(config[process.env.NODE_ENV]);

module.exports.db = db;