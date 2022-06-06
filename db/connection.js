// db/connection.js
// Require Mongoose:
const mongoose = require('mongoose')

// connect to database
mongoose.connect('mongodb://localhost:27017/captainsLog', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})