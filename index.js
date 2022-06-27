const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
const dbURI = process.env.MONGODB_URI 
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const buddyRoutes = require('./routes/buddyRoutes.js')
const eventRoutes = require('./routes/eventRoutes.js')



require('dotenv').config()
// Require DB connection - within connection file
require('./db/connection.js')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'workoutBuddy',
    resave: false,
    saveUninitialized: true,
}))
app.use(function (req, res, next) {
    res.locals.username = req.session.username;
    next();
  });

// Attaching routes
app.get('/', (req, res) => {
    res.redirect('/buddy/onboard')
})
    
app.use('/events', eventRoutes)
app.use('/buddy', buddyRoutes)




app.listen(PORT, ()=>{
    console.log(`✅ PORT: ${PORT} 🌟`);
})