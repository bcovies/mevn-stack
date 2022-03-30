const express = require('express');
const mongoose = require('mongoose');
const serverConfigs = require('./configs/serverConfigs');
const bodyParser = require('body-parser');
const hostname = serverConfigs.configurations.hostname;
const port = serverConfigs.configurations.port;
const app = express();

mongoose.connect('mongodb://root:root@mongo:27017').then(function(){
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