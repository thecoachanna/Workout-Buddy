const express = require('express')
const router = express.Router()
const eventCtrl = require('../controllers/eventCtrl')

// INDEX
router.get('/', eventCtrl.getAllEvents)
   
// NEW
router.get('/new', eventCtrl.newEventForm)

// CREATE
router.post('/', eventCtrl.saveNewEvent)

// SHOW
router.get('/:id', eventCtrl.showEvent)

// CREATE - Comment
router.post('/:id', eventCtrl.createEventComment)

// DELETE - Comment
router.delete('/:id', eventCtrl.deleteEventComment)

module.exports = router





