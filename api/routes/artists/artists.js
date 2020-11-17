const express = require('express');
const artistRouter = express.Router();
const { artist } = require('../../controllers')
const { getArtistById } = artist;
const { errorHandlers } = require('../../middleware');
const { artistsErrorHandler } = errorHandlers;

artistRouter.get(
  '/artists/:id',
  getArtistById,
  artistsErrorHandler
);

module.exports = {
  artistRouter,
};