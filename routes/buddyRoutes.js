const express = require('express')
const router = express.Router()
const buddyCtrl = require('../controllers/buddyCtrl.js')

// GET - Create
router.post('/new', buddyCtrl.createUser)


// GET - Index
// router.get('/', buddyCtrl.indexLog)

// GET - New
router.get('/new', buddyCtrl.newUser)

// GET -Show route by ID
// router.get('/:id', buddyCtrl.showLog)


// GET - Edit route by ID
// router.get('/:id/edit', buddyCtrl.editLog)

// PUT - By ID
// router.put('/:id', buddyCtrl.updateLog)

// DELETE
// router.delete('/:id', buddyCtrl.deleteLog)


module.exports = router