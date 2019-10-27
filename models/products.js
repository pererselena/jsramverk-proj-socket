var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: Number, required: true },
    variance: { type: Number, required: true },
    startingPoint: { type: Number, required: true }
});

module.exports = mongoose.model('Product', schema);