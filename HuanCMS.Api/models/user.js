var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true},
    loginName: {type: String, required: true},
    email: {type: String, required: true},
    pwd: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: Schema.ObjectId, ref: 'User'},
    updatedAt: {type: Date, default: Date.now},
    updatedBy: {type: Schema.ObjectId, ref: 'User'}
});

UserSchema.index({loginName: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});

mongoose.model('User', UserSchema);
