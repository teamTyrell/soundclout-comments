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

module.exports = {
  readSongs,
  readSongById,
};