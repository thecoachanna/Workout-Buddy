const express = require('express')
const router = express.Router()
const eventCtrl = require('../controllers/eventCtrl')

// INDEX - Show all events
router.get('/', eventCtrl.getAllEvents)
   
// NEW - Event
router.get('/new', eventCtrl.newEventForm)

// CREATE - Save Event
router.post('/', eventCtrl.saveNewEvent)

// SHOW - Event
router.get('/:id', eventCtrl.showEvent)

// CREATE - Comment
router.post('/:id', eventCtrl.createEventComment)

// DELETE - Comment
router.delete('/:id', eventCtrl.deleteEventComment)



module.exports = router





