// db/connection.js
// Require Mongoose:
const mongoose = require('mongoose')
const dbURI = process.env.DATABASE_URL

// connect to database
mongoose.connect(dbURI, {
    useNewUrlParser: true
})
// process.env.database_url

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})