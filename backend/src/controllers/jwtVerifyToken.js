const jwt = require("jsonwebtoken");
const auth = require("../configs/secretConfigs");

module.exports = function (res, token) {
	const verifyToken = jwt.verify(token, auth.secret, function (err, decoded) {
		if (err) {
			return res.status(401).send({
				error: "Token malformatted"
			});
		}
		return decoded.id;
	});
	return verifyToken;
};