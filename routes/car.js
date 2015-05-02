var express = require('express');
var router = express.Router();

// GET  a car by id
router.get('/', function(req, res, next) {
    res.send('Car id: ' + req.query.id);
});

// POST new car
router.post('/', function(req, res, next) {
    console.log("New car: " + req.body.brand + " " + req.body.model);
    res.render('cars', { title: 'Updated List of Cars' });
});

module.exports = router;
