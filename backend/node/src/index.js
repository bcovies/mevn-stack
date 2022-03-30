const express = require('express');
const mongoose = require('mongoose');
const serverConfigs = require('./configs/serverConfigs');
const databaseConfigs = require('./configs/databaseConfigs');
const bodyParser = require('body-parser');

const hostname = serverConfigs.configurations.hostname;
const port = serverConfigs.configurations.port;

const db_host = databaseConfigs.databaseConfigurations.hostname;
const db_user = databaseConfigs.databaseConfigurations.user;
const db_pass = databaseConfigs.databaseConfigurations.password;
const db_port = databaseConfigs.databaseConfigurations.port;

const app = express();

mongoose.connect(`mongodb://${db_user}:${db_pass}@${db_host}:${db_port}`).then(function(){
  console.log('Conectado!');
}).catch((err)=>{
  console.log(err);
});

// app.use(bodyParser.json);

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.get('/', (req, res) => {
  res.send('Hello,! World!!');
});

app.get('/:id', (req,res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Servidor ${hostname} na porta ${port} Online!`);
});