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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/user', user);
app.use('/', main);

app.listen(port, () => {
  console.log(`Server ${hostname}:${port} Online!`);
});