//GLOBAL IMPORTS
const express = require('express');
const bodyParser = require('body-parser');

const serverConfigs = require('./configs/serverConfigs');
const hostname = serverConfigs.configurations.hostname;
const port = serverConfigs.configurations.port;

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

require('./controllers/registerController')(app);

app.listen(port, () => {
  console.log(`Server ${hostname}:${port} Online!`);
});