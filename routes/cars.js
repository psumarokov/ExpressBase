var express = require('express');
var router = express.Router();

var Car = require('../model/car.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Car.find(function(err, cars) {
        if (err) return next(err);
        res.render('cars', { title: 'List of Cars', allCars: cars });
    });
});

module.exports = router;
