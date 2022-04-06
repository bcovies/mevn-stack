
require('dotenv').config({ path: 'src/configs/.env' });

exports.apiConfigurations = {
    apiEndpoint: process.env.API_ENDPOINT
};
