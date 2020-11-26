const express = require('express');
const songsRouter = express.Router();
const { songs } = require('../../controllers');
const {
  getSongById,
  getSongs,
  getSongComments,
  getSongPlaylists
} = songs;
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

songsRouter.get(
  '/songs/:song_id/playlists',
  getSongPlaylists,
);

module.exports = {
  songsRouter,
};