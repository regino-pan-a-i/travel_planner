const express = require('express');
const router = express.Router()
const travelController = require('../controllers/travelController')
const utilHandler = require('../utilities/index')
const validator = require('../utilities/travelValidation')


/*****************************
 * Routes
 * **************************/


router.get('/', utilHandler.handleErrors(travelController.getTravels))
router.get('/:id', utilHandler.handleErrors(travelController.getTravelById))
router.post('/', validator.travelRules(), validator.validate, utilHandler.handleErrors(travelController.createTravel))
router.put('/:id', validator.travelRules(), validator.validate, utilHandler.handleErrors(travelController.updateTravel))
router.delete('/:id', utilHandler.handleErrors(travelController.deleteTravel))



module.exports = router;