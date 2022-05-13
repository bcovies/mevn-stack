const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const session = require("express-session");

router.use(cookieParser());
router.use(session({secret: "123",  resave: true,
	saveUninitialized: true}));

// const sessionAuth;

var sessionAuth = "";

// Home page route.
router.get("/", function (req, res) {
	res.send("auth home page");
});

const User = require("../models/userSchema");
const jwtGenToken = require("../controllers/jwtGenToken");

// Register page route.
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


const bcrypt = require("bcrypt");

// Token page route.
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

const authMiddleware = require("../middleware/auth");

// Login page route.
router.get("/login", authMiddleware, (req,res) => {
    
	sessionAuth = req.session;
	sessionAuth.userId = req.userId;
	console.log(sessionAuth);

	res.status(200).send ({ ok: true, userID: req.userId });
});

router.get("/dashboard", (req,res) => {
	console.log(sessionAuth);
	if(sessionAuth.userId == undefined){
		res.status(401).send({ error: "Not authorized, please login"});
	}else {
		res.status(200).send({ok:true});
	}
});

module.exports = router;