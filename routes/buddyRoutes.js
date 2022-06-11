const express = require('express')
const router = express.Router()
const buddyCtrl = require('../controllers/buddyCtrl.js')


// NEW
router.get('/new', buddyCtrl.newUserForm)

// CREATE
router.post('/', buddyCtrl.saveNewUser)

// SHOW
router.get('/:id', buddyCtrl.showUserProfile)


module.exports = router