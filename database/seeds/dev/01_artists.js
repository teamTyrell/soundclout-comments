
const { generateArtists } = require('../data.js');

exports.seed = function(knex) {

  return knex('artists').del()
    .then(function () {

      const artists = generateArtists();

      return knex('artists').insert(artists);
    });
};
