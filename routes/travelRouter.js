const express = require('express');
const router = express.Router()
const travelController = require('../controllers/travelController')
const utilHandler = require('../utilities/index')
const validator = require('../utilities/travelValidation')


/*****************************
 * Routes
 * **************************/


router.get('/', (travelController.getTravels))
router.get('/:id', (travelController.getTravelById))
router.post('/', validator.travelRules(), validator.validate, (travelController.createTravel))
router.put('/:id', validator.travelRules(), validator.validate, (travelController.updateTravel))
router.delete('/:id', (travelController.deleteTravel))



module.exports = router;