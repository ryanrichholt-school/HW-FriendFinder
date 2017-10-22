// Router for front end site
var express = require("express");
var router = express.Router();

var public = {root: 'app/public/'}

router.get('/survey', function(req, res){
     res.sendFile("survey.html", public);
});

router.get('/', function(req, res){
    res.sendFile("home.html", public);
});

module.exports = router;

