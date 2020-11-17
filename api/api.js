require('dotenv').config();
const { apiRouter } = require('./routes');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

const initApi = () => {

  const api = express();

  api.use([
    bodyParser.json(),
    apiRouter,
  ]);

  return api;
}

module.exports.initApi = initApi;
