
exports.up = function(knex) {

  return knex.schema.table('songs', table => {

    table.string('name');
    table.boolean('explicit')
      .defaultsTo(false);

    table.integer('album_id')
      .unsigned()
      .references('id')
      .inTable('albums')
      .onDelete('CASCADE');

  });

};

exports.down = function(knex) {

  return knex.schema.table('songs', table => {

    table.dropColumn('name');
    table.dropColumn('explicit');
    table.dropColumn('album_id');

  });

};
