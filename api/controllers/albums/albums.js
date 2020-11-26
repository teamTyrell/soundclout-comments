const { albums } = require('../../../database/models');
const { readAlbumById } = albums;
const { songs } = require('../../../database/models');
const { readSongsByAlbumId } = songs;
const { artist } = require('../../../database/models');
const { readArtistById } = artist;

const getAlbumById = (req, res, next) => {

  const { id } = req.params;

  readAlbumById(id)
    .then(album => {

      readSongsByAlbumId(id)
        .then(songs => {

          album[0].songs = songs;

          const { artist_id } = songs[0];

          readArtistById(artist_id)
            .then(artist => {

              album[0].artist = artist[0];
              res.status(200).json(album[0]);

            }).catch(readArtistError => {
              console.log(readArtistError);
              res.status(500);
            });

        }).catch(readSongsError => {
          console.error(readSongsError);
          res.status(500);
        });

    }).catch(readAlbumError => {
      console.error(readAlbumError);
      res.status(500);
    });

};

module.exports = {
  getAlbumById,
};