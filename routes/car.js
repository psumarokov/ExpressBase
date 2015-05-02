var express = require('express');
var router = express.Router();

var Car = require('../model/car.js');

// GET  a car by id
router.get('/', function(req, res, next) {
    Car.findById(req.query.id, function(err, car) {
        if (err) return next(err);
        res.send('Car: ' + car.fullName());
    });
});

// POST new car
router.post('/', function(req, res, next) {
    var car = new Car({
        brand: req.body.brand,
        model: req.body.model});

    car.save(function(err, car) {
        if (err) return next(err);
        console.log('Saved car: ' + car.fullName());
        res.redirect('/cars');
    });
});

module.exports = router;
