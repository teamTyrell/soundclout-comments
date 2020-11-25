
const { generateSongsTags } = require('../data.js');

exports.seed = function(knex) {

  return knex('songsTags').del()
    .then(function () {

      const songsTags = generateSongsTags();

      return knex('songsTags').insert(songsTags);
    });
};