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
				error: "(3) - Missing email"
			});
		}
		if ( password == "" ){
			return res.status(400).send({
				error: "(4) - Missing password"
			});
		}
	}
	try{
		const user = await User.findOne({ email }).select("+password");

           
		if(!user){
			return res.status(400).send({
				error: "(1) - User doesn't exists"
			});
		}

		if(! await bcrypt.compare(password, user.password)){
			return res.status(400).send({
				error: "(2) - Password is wrong!"
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