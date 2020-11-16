const { artistRouter } = require('./artists.js');
const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/api', [artistRouter]);

module.exports = {
  apiRouter,
};