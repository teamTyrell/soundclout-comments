
const { generateSongs } = require('../data.js');

exports.seed = function(knex) {

  return knex('songs').del()
    .then(function () {

      const songs = generateSongs();

      return knex('songs').insert(songs);
    });
};
