const mongoose = require('mongoose');



const registrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
});



module.exports = mongoose.model('event_registrations', registrationSchema);