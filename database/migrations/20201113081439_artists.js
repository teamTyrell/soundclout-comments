
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('artists')
    .then(() => {

      return knex.schema.createTable('artists', table => {

        table.increments('id');
        table.string('name');
        table.integer('followers');

      });

    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('artists');
};
