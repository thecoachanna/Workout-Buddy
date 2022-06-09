const express = require('express')
const app = express()
const PORT = 3000
const path = require('path');
const methodOverride = require('method-override');

const buddyRoutes = require('./routes/buddyRoutes.js')
const eventRoutes = require('./routes/eventRoutes.js')


require('dotenv').config()
// Require DB connection - within connection file
require('./db/connection.js')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// Attaching routes
app.use('/events', eventRoutes)
app.use('/buddy', buddyRoutes)




app.listen(PORT, ()=>{
    console.log(`✅ PORT: ${PORT} 🌟`);
})