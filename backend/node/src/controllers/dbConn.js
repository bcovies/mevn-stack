//GLOBAL IMPORTS
const mongoose = require('mongoose');
const databaseConfigs = require('../configs/databaseConfigs');
//IMPORT CONFIGS
const db_host = databaseConfigs.databaseConfigurations.hostname;
const db_user = databaseConfigs.databaseConfigurations.user;
const db_pass = databaseConfigs.databaseConfigurations.password;
const db_port = databaseConfigs.databaseConfigurations.port;
const db_dbs = databaseConfigs.databaseConfigurations.dbs;

mongoose.connect(`mongodb://${db_user}:${db_pass}@${db_host}:${db_port}/${db_dbs}`).then(function(){
  console.log(`Connected with:${db_user}:${db_pass}@${db_host}:${db_port}/${db_dbs}`);
}).catch((err)=>{
  console.log(`${err}`);
});