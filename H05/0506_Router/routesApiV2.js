// API - versie 2
var express = require('express');
var router = express.Router();

// homepage voor deze router.
router.get('/', function(req, res){
	res.send('Verbeterde API - Versie 2');
});

router.get('/about', function(req, res){
	res.send('Verbeterde API - Over Ons - Versie 2');
});

router.get('/products', function(req, res){
	res.send('Verbeterde API Nieuwe functie - Retourneer producten - Versie 2');
});

router.get('*', function(req, res){
	res.send('API versie 1 - onbekende route...');
});
module.exports = router;