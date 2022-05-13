const jwtVerifyToken = require("../controllers/jwtVerifyToken");

module.exports = function (req, res, next) {
	const authHeader = req.headers.authorization;

	if ( !authHeader ){
		return res.status(401).send({
			error: "No token was provided"
		});
	}
	const authToken = jwtVerifyToken(res, authHeader);
	req.userId = authToken;  
	next();
};