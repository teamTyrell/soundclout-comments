
const { generateTags } = require('../data.js');

exports.seed = function(knex) {

  return knex('tags').del()
    .then(function () {

      const tags = generateTags();

      return knex('tags').insert(tags);
    });
};