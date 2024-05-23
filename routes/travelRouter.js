const express = require('express');
const router = express.Router()
const travelController = require('../controllers/travelController')


/*****************************
 * Routes
 * **************************/


router.use('/', travelController.getTravels)



module.exports = router;