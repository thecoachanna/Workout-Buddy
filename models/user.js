const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    upcomingEvents: [{ref: "Event", type: mongoose.SchemaTypes.ObjectId}]
})

const User = mongoose.model('User', userSchema);

module.exports = User;

