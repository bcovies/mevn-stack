require("dotenv").config();

module.exports = {
	secret: process.env.NODE_TOKEN,
	session_secret: process.env.NODE_SESSION_TOKEN,
};