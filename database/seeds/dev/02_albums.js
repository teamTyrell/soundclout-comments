
const { generateAlbums } = require('../data.js');

exports.seed = function(knex) {

  return knex('albums').del()
    .then(function () {

      const albums = generateAlbums();

      return knex('albums').insert(albums);
    });
};

