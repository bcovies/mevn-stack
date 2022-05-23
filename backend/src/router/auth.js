const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const jwtGenToken = require("../controllers/jwtGenToken");
router.get("/", (req, res) => {
	return res.status(200).send({ session: req.session });
});

// Register page route.
router.post("/register", async (req, res) => {

	const { email, password, dob, phone } = req.body;
	if (email || password || dob || phone == "") {
		if (email == "") {
			return res.status(400).send({
				error: "Missing email"
			});
		}
		if (password == "") {
			return res.status(400).send({
				error: "Missing password"
			});
		}
		if (dob == "") {
			return res.status(400).send({
				error: "Missing day of birth"
			});
		}
		if (phone == "") {
			return res.status(400).send({
				error: "Missing phone"
			});
		}
	}
	try {
		if (await User.findOne({ email })) {
			return res.status(400).send({ error: "User already registred!" });
		}
		const user = await User.create(req.body);
		user.password = undefined;
		// const token = jwtGenToken(user);

		return res.status(200).send("User registred with success");
	} catch (error) {
		console.log(error);
		return res.status(400).send({
			error: "Regstration failed!"
		});
	}
});

const bcrypt = require("bcrypt");

// Token page route.
router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	if (email || password == "") {
		if (email == "") {
			return res.status(400).send({
				error: "Missing email"
			});
		}
		if (password == "") {
			return res.status(400).send({
				error: "Missing password"
			});
		}
	}
	try {
		const user = await User.findOne({ email }).select("+password");

		if (!user) {
			return res.status(400).send({
				error: "User doesn't exists"
			});
		}

		if (! await bcrypt.compare(password, user.password)) {
			return res.status(400).send({
				error: "Password is wrong!"
			});
		}
		user.password = undefined;

		const token = jwtGenToken(user);

		req.session.token = token;
		req.session.email = email;
		// console.log(req.session);
		// console.log(req.sessionID);		
		req.session.save();
		return res.status(200).send(req.session);

	} catch (error) {
		console.log(error);
		return res.status(400).send({ error: error });
	}
});

const authMiddleware = require("../middleware/auth");

router.get("/dashboard", authMiddleware, (req, res) => {
	return res.status(200).send(req.session);
});

router.get("/logout", authMiddleware, (req, res) => {
	req.session.destroy();
	console.log(req.session);

	if (req.session == "" || req.session == undefined) {
		res.status(200).send("User succesfully logout: " + req.session);
	} else {
		res.status(403).send("Internal Error. Could not logout!  :: " + req.session);
	}
});

module.exports = router;