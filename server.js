const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }...`);
});