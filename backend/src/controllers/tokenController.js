const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/userSchema");
const jwtGenToken = require("./jwtGenToken");

router.post("/token", async (req,res) => {
	const { email, password } = req.body;
	if ( email || password == "" ){
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
	}
	try{
		const user = await User.findOne({ email }).select("+password");

           
		if(!user){
			return res.status(400).send({
				error: "User doesn't exists"
			});
		}

		if(! await bcrypt.compare(password, user.password)){
			return res.status(400).send({
				error: "Password is wrong!"
			});
		}
		user.password = undefined;

		const token = jwtGenToken(user);
        
		res.status(200).send({ user, token });
	} catch (error) {
		console.log(error);
	}
});

module.exports = app => app.use("/auth", router);