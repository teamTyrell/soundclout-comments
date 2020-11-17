const errors = require('../../constants/errors');

const artistsErrorHandler = (err, req, res, next) => {

  switch (err.message) {

    case errors.ARTIST_NOT_FOUND:
      res.status(404).json({ error: errors.ARTIST_NOT_FOUND });
      break;

    default:
      console.error(err);
      res.status(500).json({ error: errors.SERVER_ERROR });
      break;

  };

};

module.exports = {
  artistsErrorHandler,
};