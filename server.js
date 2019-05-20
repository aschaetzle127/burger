var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routes = require('./controllers/burger_controller.js');

var app = express();
var orm = require("./config/orm.js");
var PORT = process.env.PORT || 3030;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(PORT);