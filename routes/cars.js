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

// POST new car
router.post('/', function(req, res, next) {
    var car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        image: req.files.image.name});

    car.save(function(err, car) {
        if (err) return next(err);
        console.log('Saved car: ' + car.fullName());
        res.json({status: 'OK'});
    });
});

// DELETE a car by id
router.delete('/:id', function(req, res, next) {
    var imagesPath = '.' + req.app.locals.public + req.app.locals.images;
    Car.cleanAndRemoveById(req.params.id, imagesPath).then(function() {
        console.log('Deleted car with id ' + req.params.id);
        res.json({status: 'OK'});
    }, function(err) {
        next(err);
    });
});

module.exports = router;
