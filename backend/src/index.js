//GLOBAL IMPORTS
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const serverConfigs = require("./configs/serverConfigs");
const sessionConfigs = require("./configs/secretConfigs");
const hostname = serverConfigs.hostname;
const port = serverConfigs.port;

const app = express();

app.use(cookieParser());

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
		origin: ["http://localhost", "https://localhost", "http://127.0.0.1", "https://127.0.0.1", `https://${sessionConfigs.session_secret}`],
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