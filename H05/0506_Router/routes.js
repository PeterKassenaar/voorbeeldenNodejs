// routes.js - middleware via express.Router()
var express = require('express');
var router = express.Router();

// Dit mag ook in één regel:
// var router = require('express').Router();

// middleware specifiek voor deze router - merk op dat geen 'app' nodig is.
router.use(function(req, res, next){
	console.log('Router aangeroepen: ', new Date());
	next();
});

// homepage voor deze router.
router.get('/', function(req, res){
	res.send('Homepage van de router');
});

router.get('/about', function(req, res){
	res.send('Over ons - vanuit de router');
});

router.get('*', function(req, res){
	res.send('onbekende route...');
});
module.exports = router;