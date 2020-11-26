const { users } = require('../../../database/models');
const { readUserById } = users;

const getUserById = (req, res, next) => {

  const { id } = req.params;

  readUserById(id)
    .then(user => {
      res.status(200).json(user);
    }).catch(readUserError => {
      console.log(readUserError);
      res.sendStatus(500);
    });

};

module.exports = {
  getUserById,
};