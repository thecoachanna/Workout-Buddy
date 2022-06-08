const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    avatar: String,
    googleId: String,
    phoneNumber: String,
    activity: String,
    upcomingEvents: [String]
})

const User = mongoose.model('User', UserSchema);

module.exports = User;

