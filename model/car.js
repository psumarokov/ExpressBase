var fs = require('fs');
var mongoose = require('mongoose');
var q = require('q');

var CarSchema = mongoose.Schema({
    brand: String,
    model: String,
    image: String
});

CarSchema.statics.cleanAndRemoveById = function(carId, imagesPath) {
    var deferred = q.defer();

    this.model('Car').findOneAndRemove({'_id' : carId}, function(err, car){
        if (err) return deferred.reject(err);
        var imageName = imagesPath + car.image;
        fs.unlink(imageName, function(err) {
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
