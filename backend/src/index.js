//GLOBAL IMPORTS
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const cookieSession = require("cookie-session");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const serverConfigs = require("./configs/serverConfigs");
const hostname = serverConfigs.hostname;
const port = serverConfigs.port;

const app = express();

app.use(cookieParser());
// app.use(cookieSession({
// 	name: "session",
// 	keys: ["123"],
// 	// Cookie Options
// 	maxAge: 2 * 60 * 60 * 1000 // 24 hours
// }));
const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
	secret: "kelly",
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false,
		maxAge: oneDay,
	}
}));


app.use(cors(
	{
		origin: ["https://xxx.com", "http://localhost"],
		methods: ["GET", "POST"],
		allowedHeaders: ["Content-Type", "authorization"],
		credentials: true,
		maxAge: oneDay
	}
));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const auth = require("./router/auth");

app.use("/auth", auth);

app.listen(port, () => {
	console.log(`Server ${hostname}:${port} Online!`);
});