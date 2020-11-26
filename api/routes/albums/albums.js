const express = require('express');
const albumsRouter = express.Router();
const { albums } = require('../../controllers');
const { getAlbumById } = albums;

albumsRouter.use('/albums/:id', getAlbumById);

module.exports = {
  albumsRouter,
};