require('dotenv').config();

exports.configurations = {
    hostname: process.env.NODE_HOST,
    port: process.env.NODE_PORT
};
