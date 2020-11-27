
const { db } = require('../../config.js');

const readTagsBySongId = id => {

  return new Promise((resolve, reject) => {

    db('songsTags')
      .where({ song_id: id })
      .select('tag_id')
      .then(tagIds => {

        const tagIdArr = tagIds.map(({ tag_id }) => tag_id);

        db('tags')
          .whereIn('id', tagIdArr)
          .select()
          .then(resolve)
          .catch(reject);

      }).catch(reject);

  });

};

module.exports = {
  readTagsBySongId,
};