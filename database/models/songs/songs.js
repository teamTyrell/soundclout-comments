const { db } = require('../../config.js');

const readSongs = () => {

  return new Promise((resolve, reject) => {

    db('songs')
      .select()
      .then(resolve)
      .catch(reject);

  });

};

const readSongById = id => {

  return new Promise((resolve, reject) => {

    db('songs')
      .where({ id })
      .select()
      .then(resolve)
      .catch(reject);

  });

};

const readSongsByArtistId = artist_id => {

  return new Promise((resolve, reject) => {

    db('songs')
      .where({ artist_id })
      .select()
      .then(resolve)
      .catch(reject);

  });

}

const readSongsByAlbumId = album_id => {

  return new Promise((resolve, reject) => {

    db('songs')
      .where({ album_id })
      .select()
      .then(resolve)
      .catch(reject);

  });

}

module.exports = {
  readSongs,
  readSongById,
  readSongsByArtistId,
  readSongsByAlbumId,
};