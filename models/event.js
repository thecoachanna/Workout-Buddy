const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
    workout: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    date: {
        type: String,
                required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // owner: {
        // Reference another MONGODB model
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;