const jwt = require("jsonwebtoken");
const auth = require("../configs/secretConfigs");

module.exports = function (user) {
	const token = jwt.sign({ id: user.id }, auth.secret, {
		expiresIn: 3600
	});
	return token;
};