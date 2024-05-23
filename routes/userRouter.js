const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')


/*****************************
 * Routes
 * **************************/


router.use('/', userController.getUsers)



module.exports = router;