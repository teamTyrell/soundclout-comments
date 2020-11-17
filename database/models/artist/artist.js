const { db } = require('../../config.js');

const readArtistById = id => {

  return new Promise((resolve, reject) => {

    db('artists')
      .where({ id })
      .select()
      .then(resolve)
      .catch(reject);

  });

};

module.exports = {
  readArtistById,
};