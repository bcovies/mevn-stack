const jwt = require('jsonwebtoken');
const auth = require('../configs/tokenConfigs');

module.exports = function( user ) {
    const token = jwt.sign({ id: user.id }, auth.token,{ 
        expiresIn: 3600
    });

    return token;
}