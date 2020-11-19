const { db } = require('../../config.js');

const readUsers = () => {

  return new Promise((resolve, reject) => {

    db('users')
      .select()
      .then(resolve)
      .catch(reject);

  });

};

const readUserById = id => {

  return new Promise((resolve, reject) => {

    db('users')
      .where({ id })
      .select()
      .then(user => {
        resolve(user[0]);
      }).catch(reject);

  });

};

module.exports = {
  readUsers,
  readUserById,
};