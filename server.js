require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 8080;

const data = require('./database/seeds/data.js');

const comments = data.generateComments();
const replies = data.generateReplies();

console.log(comments);
// console.log(replies);

server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }...`);
});