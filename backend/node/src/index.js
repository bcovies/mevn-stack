const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const serverConfigs = require('./configs/serverConfigs');
const databaseConfigs = require('./configs/databaseConfigs');
const User = require('./models/userSchema');

const hostname = serverConfigs.configurations.hostname;
const port = serverConfigs.configurations.port;

const db_host = databaseConfigs.databaseConfigurations.hostname;
const db_user = databaseConfigs.databaseConfigurations.user;
const db_pass = databaseConfigs.databaseConfigurations.password;
const db_port = databaseConfigs.databaseConfigurations.port;

const app = express();

mongoose.connect(`mongodb://${db_user}:${db_pass}@${db_host}:${db_port}`).then(function(){
  console.log(`Connected with:${db_user}:${db_pass}@${db_host}:${db_port}`);
}).catch((err)=>{
  console.log(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
  res.send('Hello, World!!');
});

app.get('/:id', (req,res) => {
  res.send(req.params.id);
});

app.post('/user/signup', (req,res) => {
  const data = new User({
    email: req.body.email,
    password: req.body.password,
    dob: req.body.dob,
    phone: req.body.phone 
  });
  data.save();
  res.send(`User registred: ${data}`);
});

app.listen(port, () => {
  console.log(`Server ${hostname}:${port} Online!`);
});