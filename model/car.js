var mongoose = require('mongoose');

var CarSchema = mongoose.Schema({
    brand: String,
    model: String
});

CarSchema.methods.fullName = function() {
    return this.brand + " " + this.model;
}

module.exports = mongoose.model('Car', CarSchema);
