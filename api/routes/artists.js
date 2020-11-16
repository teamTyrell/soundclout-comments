const express = require('express');
const artistRouter = express.Router();

artistRouter.get('/artists', (req, res, next) => {

  res.status(200);
});

module.exports = {
  artistRouter,
};