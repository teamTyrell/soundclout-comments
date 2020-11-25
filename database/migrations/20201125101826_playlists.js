
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('playlists')
    .then(() => {

      return knex.schema.createTable('playlists', table => {

        table.increments('id');
        table.string('name');
        table.string('image_url');
        table.integer('likes');
        table.integer('reposts');

        table.integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE');

      });

    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('playlists');
};
