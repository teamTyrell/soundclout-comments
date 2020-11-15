
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('songs')
    .then(() => {

      return knex.schema.createTable('songs', table => {

        table.increments('id');
        table.integer('plays');
        table.integer('likes');
        table.integer('reposts');

        table.integer('artist_id')
          .unsigned()
          .references('id')
          .inTable('artists')
          .onDelete('CASCADE');

      });

    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('songs');
};
