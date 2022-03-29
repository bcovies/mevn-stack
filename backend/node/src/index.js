const express = require('express');
const serverConfigs = require('./configs/serverConfigs');
const bodyParser = require('body-parser');
const hostname = serverConfigs.configurations.hostname;
const port = serverConfigs.configurations.port;
const app = express();

app.use(bodyParser.json);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:id', (req,res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Servidor ${hostname} na porta ${port} Online!`);
});