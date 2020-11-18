const express = require('express');
const songsRouter = express.Router();
const { songs } = require('../../controllers');
const { getSongById, getSongs, getSongComments } = songs;
const { errorHandlers } = require('../../middleware');
const { songsErrorHandler } = errorHandlers;

songsRouter.get(
  '/songs/:id',
  getSongById,
  songsErrorHandler
);

songsRouter.get(
  '/songs',
  getSongs,
  songsErrorHandler
);

songsRouter.get(
  '/songs/:song_id/comments',
  getSongComments,
  songsErrorHandler
);

module.exports = {
  songsRouter,
};