var fs = require('fs');
var mongoose = require('mongoose');
var q = require('q');

var CarSchema = mongoose.Schema({
    brand: String,
    model: String,
    image: String
});

CarSchema.methods.cleanAndRemove = function(imagesPath) {
    var car = this;
    var imageName = imagesPath + car.image;
    var deferred = q.defer();

    fs.unlink(imageName, function(err) {
        if (err) return deferred.reject(err);
        car.remove(function(err) {
            if (err) return deferred.reject(err);
            deferred.resolve();
        });
    });

    return deferred.promise;
}

CarSchema.methods.fullName = function() {
    return this.brand + " " + this.model;
}

module.exports = mongoose.model('Car', CarSchema);
