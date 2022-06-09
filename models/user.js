const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    avatar: String,
    googleId: String,
    phoneNumber: String,
    activity: String,
    upcomingEvents: [String]
})

const User = mongoose.model('User', userSchema);

module.exports = User;

