const express = require('express')
const router = express.Router()
const eventCtrl = require('../controllers/eventCtrl')

// INDEX
router.get('/', eventCtrl.getAllEvents)
   
// NEW
router.get('/new', eventCtrl.newEventForm)

// SHOW
router.post('/', eventCtrl.saveNewEvent)


module.exports = router