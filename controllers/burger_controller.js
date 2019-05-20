var express = require("express");
var burger = require("../models/burger.js");
var bodyP = require("body-parser");
var router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.selectAll('burgers', function (data) {
        var burgerObj = { burgers: data }
        res.render('index', burgerObj);
    });
});

router.post('/burgers/create', function (req, res) {
    console.log(req.body.burger_name);
    burger.selectAll('burgers', function (data) {
        var burgerObj = { burgers: data }
        res.render('index', burgerObj);
    });
});

router.put('/burgers/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne('burgers', { 'devoured': req.body.devoured }, condition, function (data) {
        res.redirect('/burgers');
    });
});

module.exports = router;

