//GLOBAL IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
//CONFIGS IMPORTS
const serverConfigs = require('./configs/serverConfigs');
const hostname = serverConfigs.configurations.hostname;
const port = serverConfigs.configurations.port;
//ROUTES IMPORTS
const user = require('./routes/userRouter');
const main = require('./routes/mainRouter');

const app = express();

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/user', user);
app.use('/', main);

app.listen(port, () => {
  console.log(`Server ${hostname}:${port} Online!`);
});