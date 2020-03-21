var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FineSchema = new Schema({
    reason: {type: String, required: true},
    amount: {type: Number, required: true}
});

module.exports = mongoose.model('Fine', FineSchema);
