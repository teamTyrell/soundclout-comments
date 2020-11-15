
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('comments')
    .then(() => {

      return knex.schema.createTable('comments', table => {

        table.increments('id');
        table.text('text');

        table.timestamp('created_at')
          .defaultTo(knex.fn.now());

        table.integer('song_at');

        table.integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
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
  return knex.schema.dropTable('comments');
};
