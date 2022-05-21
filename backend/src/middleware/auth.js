const jwtVerifyToken = require("../controllers/jwtVerifyToken");

module.exports = function (req, res, next) {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).send({
			error: "No token was provided"
		});
	}
	jwtVerifyToken(res, authHeader);
	next();
};