require('dotenv').config({ path: 'src/configs/.env' });

exports.configurations = {
    hostname: process.env.NODE_HOST,
    port: process.env.NODE_PORT
};
