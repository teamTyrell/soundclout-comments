
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('songsPlaylists')
    .then(() => {

      return knex.schema.createTable('songsPlaylists', table => {

        table.integer('playlist_id')
          .unsigned()
          .references('id')
          .inTable('playlists')
          .onDelete('CASCADE');

        table.integer('song_id')
          .unsigned()
          .references('id')
          .inTable('songs')
          .onDelete('CASCADE');

      });

    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('songsPlaylists');
};
