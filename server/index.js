const http = require('http');
const express = require('express');
const config = require('../config');
const socket = require('./lib/socket');

const app = express();
const server = http.createServer(app);

app.use('/', express.static(`${__dirname}/../client`));

app.get('*', (req, res) => {
  // eslint-disable-next-line no-undef
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
  res.end();
});

server.listen(config.PORT, () => {
  socket(server);
  // eslint-disable-next-line no-console
  console.log('Server is listening at :', config.PORT);
});
