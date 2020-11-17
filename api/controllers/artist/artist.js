const errors = require('../../constants/errors');
const { artist } = require('../../../database/models');
const { readArtistById } = artist;

const getArtistById = (req, res, next) => {

  try {

    const { id } = req.params;

    readArtistById(id)
      .then(artist => {

        if (artist.length === 0) next(new Error(errors.ARTIST_NOT_FOUND));
        else res.status(200).json(artist[0]);

      }).catch(readError => {
        next(readError);
      });

  } catch (error) {
    next(error);
  }

};

module.exports.getArtistById = getArtistById;