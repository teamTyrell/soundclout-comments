const { artistRouter } = require('./artists/artists.js');
const { songsRouter } = require('./songs/songs.js');
const { albumsRouter } = require('./albums/albums.js');
const { usersRouter } = require('./users/users.js');
const express = require('express');
const apiRouter = express.Router();

apiRouter.use(
  '/api', [
    artistRouter,
    songsRouter,
    albumsRouter,
    usersRouter,
]);

module.exports = {
  apiRouter,
};