const { db } = require('../../config.js');

const readRepliesByCommentId = comment_id => {

  return new Promise((resolve, reject) => {

    db('replies')
      .where({ comment_id })
      .select()
      .then(replies => {

        resolve(replies);

      }).catch(reject);

  });

};

module.exports = {
  readRepliesByCommentId,
};