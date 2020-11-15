const { generateUsers } = require('../data.js');

exports.seed = function(knex) {

  return knex('users').del()
    .then(function () {

      const users = generateUsers();

      return knex('users').insert(users);
    });
};
