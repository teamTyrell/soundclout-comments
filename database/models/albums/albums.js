const { db } = require('../../config.js');

const readAlbumById = id => {

  return new Promise((resolve, reject) => {

    db('albums')
      .where({ id })
      .select()
      .then(resolve)
      .catch(reject);

  });

};

const readAlbums = () => {

  return new Promise((resolve, reject) => {

    db('albums')
      .select()
      .then(resolve)
      .catch(reject);

  });

}

module.exports = {
  readAlbumById,
  readAlbums,
};