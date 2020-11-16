const path = require('path');
require('dotenv').config( /* { path: path.resolve(__dirname, '../.env') } */ );
const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config[process.env.NODE_ENV]);

module.exports.db = db;