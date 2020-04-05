var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FineInstanceSchema = new Schema({
    paid: {
        type: String,
        enum: ['paid', 'due', 'flipped', 'tribunal'],
        default: 'due'
    },
    date_received: Date,
    date_paid: Date,
    flipped: {
        type: String,
        enum: ['success', 'failure', 'no'],
        default: 'no'
    },
    scale: {type: Number, default: 1},
    evidence: String,
    tribunal: {
        type: String,
        enum: ['success', 'failure', 'no'],
        default: 'no'
    }
});

module.exports = mongoose.model('FineInstance', FineInstanceSchema);
