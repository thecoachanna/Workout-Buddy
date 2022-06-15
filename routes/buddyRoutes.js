const express = require('express')
const router = express.Router()
const buddyCtrl = require('../controllers/buddyCtrl.js')


// NEW
router.get('/new', buddyCtrl.newUserForm)

// CREATE
router.post('/', buddyCtrl.saveNewUser)

router.get('/onboard', buddyCtrl.onboardUser)

router.get('/login', buddyCtrl.loginUser)

router.post('/login', buddyCtrl.submitLogin)

// UPDATE
router.put('/:id', buddyCtrl.updateProfile)

// SHOW
router.get('/:id', buddyCtrl.showUserProfile)




module.exports = router