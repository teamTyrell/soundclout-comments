
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('replies')
    .then(() => {

      return knex.schema.createTable('replies', table => {

          table.increments('id');

          table.integer('comment_id')
            .unsigned()
            .references('id')
            .inTable('comments')
            .onDelete('CASCADE');

          table.integer('reply_id')
            .unsigned()
            .references('id')
            .inTable('comments')
            .onDelete('CASCADE');
        });
    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('replies');
};
