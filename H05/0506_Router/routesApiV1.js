// API - versie 1
var express = require('express');
var router = express.Router();

// homepage voor deze router.
router.get('/', function(req, res){
	res.send('Homepage API - Versie 1');
});

router.get('/about', function(req, res){
	res.send('Over Ons - API versie 1');
});

router.get('*', function(req, res){
	res.send('API versie 1 - onbekende route...');
});
module.exports = router;