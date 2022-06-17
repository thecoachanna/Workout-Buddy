const { Router } = require('express')
const express = require('express')
const router = express.Router()
const buddyCtrl = require('../controllers/buddyCtrl.js')

// LOGIN ROUTES
router.get('/onboard', buddyCtrl.onboardUser)

router.get('/login', buddyCtrl.loginUser)

router.post('/login', buddyCtrl.submitLogin)

// PROFILE ROUTES

// NEW - Profile
router.get('/new', buddyCtrl.newUserForm)

// CREATE _ Profile
router.post('/', buddyCtrl.saveNewUser)

// SHOW - Profile
router.get('/:username', buddyCtrl.displayProfile)

// EDIT - Profile
router.get('/:id/edit', buddyCtrl.editUserProfile)

router.get('/:eventId/remove', buddyCtrl.deleteEventFromProfile)

// UPDATE - Add events to Profile
router.put('/events/:id', buddyCtrl.addEventToProfile)

// UPDATE - Profile
router.put('/:id', buddyCtrl.updateProfile)



// SHOW
router.get('/:id', buddyCtrl.showUserProfile)


module.exports = router