const express = require('express');
const usersRouter = express.Router();
const { users } = require('../../controllers');
const {
  getUserById,
} = users;

usersRouter.get(
  '/users/:id',
  getUserById,
);

module.exports = {
  usersRouter,
};