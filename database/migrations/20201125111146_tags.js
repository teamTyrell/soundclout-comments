
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('tags')
    .then(() => {

      return knex.schema.createTable('tags', table => {

        table.increments('id');
        table.string('name');

      });

    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('tags');
};

