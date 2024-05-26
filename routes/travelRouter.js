const express = require('express');
const router = express.Router()
const travelController = require('../controllers/travelController')


/*****************************
 * Routes
 * **************************/


router.get('/', travelController.getTravels)
router.get('/:id', travelController.getTravelById)
router.post('/', travelController.createTravel)
router.put('/:id', travelController.updateTravel)
router.delete('/:id', travelController.deleteTravel)



module.exports = router;