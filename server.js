/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(8080, () => {
  const host = server.address('vladcancode.appspot.com').address;
  const port = server.address('vladcancode.appspot.com').port;

  console.log(`Example app listening at http://${host}:${port}`);
});
*/

const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');

const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use('/api', apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

module.exports = app;
