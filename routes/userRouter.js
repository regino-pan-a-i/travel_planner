const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')
const util = require('../utilities/userValidation')
const utilHandler = require('../utilities/index')
const auth = require('../utilities/auth');


/*****************************
 * Routes
 * **************************/


router.get('/', auth.authController.isLoggedIn,(userController.getUsers))
router.get('/:id',auth.authController.isLoggedIn,(userController.getUserById))
router.post('/', util.userRules(), util.validate, (userController.createUser))
router.put('/:id', util.userRules(), util.validate,(userController.updateUser))
router.delete('/:id', auth.authController.isLoggedIn,(userController.deleteUser))


module.exports = router;