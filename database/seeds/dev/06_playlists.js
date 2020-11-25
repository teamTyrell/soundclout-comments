
const { generatePlaylists } = require('../data.js');

exports.seed = function(knex) {

  return knex('playlists').del()
    .then(function () {

      const playlists = generatePlaylists();

      return knex('playlists').insert(playlists);
    });
};
