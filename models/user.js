var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.UserModel = function(connection){
    UserSchema = new Schema({
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        credit: { type: Number, default: 0 },
        role: {
            type: String,
            enum: ['User', 'Admin'],
            default: 'User'
        },
        fines: [{ type: Schema.ObjectId, ref: 'FineInstance' }]
    });
    return connection.model('User', this.UserSchema);
};
