var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    credit: { type: Number, default: 0},
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },
    fines: [{type: Schema.ObjectId, ref: 'FineInstance'}]
});

module.exports = mongoose.model('User', UserSchema);
