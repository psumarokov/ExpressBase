var express = require('express');
var router = express.Router();

var Car = require('../model/car.js');

// GET all cars
router.get('/', function(req, res, next) {
    Car.find(function(err, cars) {
        if (err) return next(err);
        res.json({cars: cars});
    });
});

// GET  a car by id
router.get('/:id', function(req, res, next) {
    Car.findById(req.params.id, function(err, car) {
        if (err) return next(err);
        car.image = req.app.locals.images + car.image;
        res.json({car: car});
    });
});

module.exports = router;
