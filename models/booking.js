const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: false
    },
    tourDate: {
        type: String,
        required: true,
        unique: false
    },
    personNum: {
        type: Number,
        required: true,
        unique: false
    }
});

module.exports = mongoose.model('Booking', bookingSchema);