
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('songsTags')
    .then(() => {

      return knex.schema.createTable('songsTags', table => {

        table.integer('tag_id')
          .unsigned()
          .references('id')
          .inTable('tags')
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
  return knex.schema.dropTable('songsTags');
};