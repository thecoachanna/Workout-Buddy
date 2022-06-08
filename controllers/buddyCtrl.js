// Bring in model/connection
const User = require('../models/user');

// NEW User
const newUser = (req, res) => {
    res.render('newUser')
}

// CREATE User
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

// SHOW User
const showUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err) {
            res.status(400).json(err)
            // JSON converts error to a language I can understand
            return
        }
    res.render('userProfile', user)
  
  })
}

module.exports = {
    newUser,
    createUser,
    showUser,
}