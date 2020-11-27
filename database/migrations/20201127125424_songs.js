
exports.up = function(knex) {

  return knex.schema.table('songs', table => {

    table.text('description');

  });

};

exports.down = function(knex) {

  return knex.schema.table('songs', table => {

    table.dropColumn('description');

  });
};
