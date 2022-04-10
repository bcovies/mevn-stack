const jwtVerifyToken = require('../controllers/jwtVerifyToken');

module.exports = function (req, res, next) {
    const authHeader = req.headers.authorization;

    if ( !authHeader ){
        return res.status(401).send({
            error: 'No token was provided'
        });
    }
    const tokenHeaderParts = authHeader.split(' ');

    if ( !tokenHeaderParts.length == 2 ){
        return res.status(401).send({
            error: 'The token provided has an error'
        });
    }

    const [ tokenScheme , tokenHash ] = tokenHeaderParts; 
    
    if ( !/^Bearer$/i.test(tokenScheme) ){
        return res.status(401).send({
            error: 'Malformatted token'
        })
    }
    
    const authToken = jwtVerifyToken(res, tokenHash);
    
    req.userId = authToken;  
    
    next();
}