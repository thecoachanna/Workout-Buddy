// db/connection.js
// Require Mongoose:
const mongoose = require('mongoose')

// connect to database
mongoose.connect('mongodb://localhost:27017/workout_Buddy', {
    useNewUrlParser: true
})
// process.env.database_url

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})