//GLOBAL IMPORTS
const express = require('express');
const bodyParser = require('body-parser');

const serverConfigs = require('./configs/serverConfigs');
const hostname = serverConfigs.hostname;
const port = serverConfigs.port;

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

require('./controllers/registerController')(app);
require('./controllers/loginController')(app);

app.listen(port, () => {
  console.log(`Server ${hostname}:${port} Online!`);
});