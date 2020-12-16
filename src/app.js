const express = require('express');
const bodyParser = require('body-parser');
const logErrors = require('./middlewares/logErrors');
const errorHandler = require('./middlewares/errorHandler');

const welcomeMessage = 'Server up and running!';

const user = require('./routes/user.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', user);
app.get('/', (req, res) => {
  res.status(200).send(welcomeMessage);
});
app.use(logErrors);
app.use(errorHandler);

module.exports = app;
