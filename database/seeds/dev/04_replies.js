const { generateReplies } = require('../data.js');

exports.seed = function(knex) {

  return knex('replies').del()
    .then(function () {

      const replies = generateReplies();

      return knex('replies').insert(replies);

    });
};