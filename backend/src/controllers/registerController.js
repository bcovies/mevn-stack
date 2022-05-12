const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const jwtGenToken = require("./jwtGenToken");

router.post("/register", async (req,res) => {

	if (req){
		console.log("Incoming REQUEST");
		console.log(req.headers);
		console.log(req.body);
	}else{
		res.send(503);
	}

	const { email, password, dob, phone } = req.body;
	if ( email || password || dob || phone == "" ){
		if ( email == "" ) {
			return res.status(400).send({
				error: "Missing email"
			});
		}
		if ( password == "" ){
			return res.status(400).send({
				error: "Missing password"
			});
		}
		if ( dob == "" ){
			return res.status(400).send({
				error: "Missing day of birth"
			});
		}
		if ( phone == "" ){
			return res.status(400).send({
				error: "Missing phone"
			});
		}
	}
	try{
		if( await User.findOne({ email }) ){
			return res.status(400).send({ error: "User already registred!"});
		}
		const user = await User.create(req.body);
		user.password = undefined; 
		const token = jwtGenToken(user);
		return res.status(200).send({ user, token });
	} catch (error) {
		console.log(error);
		return res.status(400).send({
			error: "Regstration failed!"
		});
	}
});

module.exports = app => app.use("/auth", router);