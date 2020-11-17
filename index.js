const path = require('path');
const express = require('express');
const { initApi } = require('./api/api');
const PORT = process.env.PORT || 8080;

const api = initApi();

api.use(express.static(path.resolve(__dirname, 'client/dist')));

api.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }...`);
});