var express = require('express');
var router = express.Router();

var Car = require('../model/car.js');

// POST new car
router.post('/', function(req, res, next) {
    // TODO: handle delete in separate route
    if (req.body.method == 'delete') {
        var imagesPath = '.' + req.app.locals.public + req.app.locals.images;
        Car.cleanAndRemoveById(req.body.id, imagesPath).then(function() {
            console.log('Deleted car with id ' + req.body.id);
            res.redirect('/cars')
        }, function(err) {
            next(err);
        });
    } else {
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
