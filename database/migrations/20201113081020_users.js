
exports.up = function(knex) {
  return knex.schema.dropTableIfExists('users')
    .then(() => {

      return knex.schema.createTable('users', table => {

        table.increments('id');
        table.string('name');
        table.string('location');
        table.integer('followers');

      });

    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
