require('dotenv').config();

exports.databaseConfigurations = {
    hostname: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dbs: process.env.DB_DBS
};
