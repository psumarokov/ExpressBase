var fs = require('fs');
var express = require('express');
var router = express.Router();

var Car = require('../model/car.js');

// GET  a car by id
router.get('/', function(req, res, next) {
    Car.findById(req.query.id, function(err, car) {
        if (err) return next(err);
        var carImage = req.app.locals.images + car.image;
        res.render('car', {
            title: car.fullName(),
            image: carImage,
            carId: req.query.id
        });
    });
});

// POST new car
// TODO: resolve christmas tree problem
router.post('/', function(req, res, next) {
    // TODO: handle delete in separate route
    if (req.body.method == 'delete') {
        Car.findById(req.body.id, function(err, car) {
            if (err) return next(err);
            var imageName = '.' + req.app.locals.public + req.app.locals.images + car.image;
            car.remove(function(err) {
                if (err) return next(err);
                fs.unlink(imageName, function(err) {
                    if (err) return next(err);
                    console.log('Deleted car with id ' + req.body.id);
                    res.redirect('/cars')
                });
            });
        });
    }
    else {
        var car = new Car({
            brand: req.body.brand,
            model: req.body.model,
            image: req.files.image.name});

        car.save(function(err, car) {
            if (err) return next(err);
            console.log('Saved car: ' + car.fullName());
            res.redirect('/cars');
        });
    }
});

module.exports = router;
