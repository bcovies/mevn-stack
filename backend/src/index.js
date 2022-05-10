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

require("./controllers/registerController")(app);
require("./controllers/tokenController")(app);
require("./controllers/loginController")(app);

app.listen(port, () => {
	console.log(`Server ${hostname}:${port} Online!`);
});