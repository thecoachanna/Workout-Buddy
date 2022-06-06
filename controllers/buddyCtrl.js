// Bring in model/connection
const User = require('../models/user');

// NEW
const newUser = (req, res) => {
    res.render('newUser')
}

// CREATE
const createUser = (req, res) => {
    User.create(req.body, (err) => {
        if(err) {
            res.status(400).json(err)
            // JSON converts error to a language I can understand
            return
        }
        res.redirect('/buddy')
    })
}

module.exports = {
    newUser,
    createUser,
}