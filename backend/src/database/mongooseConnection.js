const mongoose = require("mongoose");
const databaseConfigs = require("../configs/databaseConfigs");

const db_host = databaseConfigs.hostname;
const db_user = databaseConfigs.user;
const db_pass = databaseConfigs.password;
const db_port = databaseConfigs.port;
const db_dbs = databaseConfigs.dbs;

mongoose.connect(`mongodb://${db_user}:${db_pass}@${db_host}:${db_port}/${db_dbs}`)
	.then(function(){
		console.log(`MONGO connected with:${db_user}:******@${db_host}:${db_port}/${db_dbs}`);
	})
	.catch((err)=>{
		console.log(`MONGO connection FAILED: ${err}`);
	});

mongoose.Promise = global.Promise;

module.exports = mongoose;