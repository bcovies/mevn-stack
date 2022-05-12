//GLOBAL IMPORTS
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const serverConfigs = require("./configs/serverConfigs");
const hostname = serverConfigs.hostname;
const port = serverConfigs.port;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const auth = require("./router/auth");

app.use("/auth", auth);

app.listen(port, () => {
	console.log(`Server ${hostname}:${port} Online!`);
});