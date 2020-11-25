
const { generateSongsPlaylists } = require('../data.js');

exports.seed = function(knex) {

  return knex('songsPlaylists').del()
    .then(function () {

      const songsPlaylists = generateSongsPlaylists();

      return knex('songsPlaylists').insert(songsPlaylists);
    });
};

