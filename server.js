var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT ||  3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use("/", htmlRoutes);
app.use("/api/", apiRoutes);

app.listen(port, function(err){
	if(err){
		throw err;
	}
	console.log("Server started!")
});
