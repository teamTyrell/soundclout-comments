const errors = require('../../constants/errors');
const { songs } = require('../../../database/models');
const { readSongsByArtistId } = songs;
const { artist } = require('../../../database/models');
const { readArtistById } = artist;

const getArtistById = (req, res, next) => {

  try {

    const { id } = req.params;

    readArtistById(id)
      .then(artist => {

        readSongsByArtistId(id)
          .then(songs => {

            artist[0].songs = songs.length;

            if (artist.length === 0) next(new Error(errors.ARTIST_NOT_FOUND));
            else res.status(200).json(artist[0]);

          }).catch(next);

      }).catch(readError => {
        next(readError);
      });

  } catch (error) {
    next(error);
  }

};

module.exports.getArtistById = getArtistById;