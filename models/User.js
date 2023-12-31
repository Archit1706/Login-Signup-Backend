const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 225
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 225
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 225
    },

},
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);