
exports.up = function(knex) {

  return knex.schema.table('albums', table => {

    table.string('released_by');

  });

};

exports.down = function(knex) {

  return knex.schema.table('albums', table => {

    table.dropColumn('released_by');

  });
};