const express = require('express');
const app = express();
const serverConfigs = require('./configs/serverConfigs');

const hostname = serverConfigs.configurations.hostname;
const port = serverConfigs.configurations.port;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:id', (req,res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Servidor ${hostname} na porta ${port} Online!`);
});