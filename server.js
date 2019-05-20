var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routes = require('./controllers/burger_controller.js');

var app = express();
var PORT = process.env.PORT || 3030;

app.use('/static', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.engine('handelbars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(PORT);