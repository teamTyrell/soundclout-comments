
exports.up = function(knex) {

  return knex.schema.dropTableIfExists('albums')
    .then(() => {

      return knex.schema.createTable('albums', table => {

        table.increments('id');
        table.string('name');
        table.string('release_date');
        table.string('image_url');

      });

    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('albums');
};
