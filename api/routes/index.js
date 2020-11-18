const { artistRouter } = require('./artists/artists.js');
const { songsRouter } = require('./songs/songs.js');
const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/api', [artistRouter, songsRouter]);

module.exports = {
  apiRouter,
};