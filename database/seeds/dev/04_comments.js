
const { generateComments } = require('../data.js');

exports.seed = function(knex) {

  return knex('comments').del()
    .then(function () {

      const comments = generateComments();

      return knex('comments').insert(comments);

    });
};
