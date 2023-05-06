const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['normal', 'admin'],
        default: 'normal'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
