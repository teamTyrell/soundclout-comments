require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

const { artist } = require('./database/models');

artist.readArtistById(1)
  .then(artistData => {
    console.log(artistData);
  }).catch(readError => {
    console.log(typeof readError);
  })

server.use([
  bodyParser.json(),
  express.static(path.join(__dirname, 'client/dist'))
]);

server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }...`);
});