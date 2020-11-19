const { db } = require('../../config.js');

const readCommentsBySongId = song_id => {

  return new Promise((resolve, reject) => {

    db('comments')
      .where({ song_id })
      .select()
      .then(resolve)
      .catch(reject);

  });

};

module.exports = {
  readCommentsBySongId,
};