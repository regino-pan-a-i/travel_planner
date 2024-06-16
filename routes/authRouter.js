const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const util = require('../utilities/userValidation')
const utilHandler = require('../utilities/index')
const passport = require('passport');
const authController = require('../controllers/authController');
const auth = require('../utilities/auth');


require('../utilities/auth');




/*********
* Middleware
***********/


/*********
* Routes
***********/

router.post('/register',util.userRules(), util.validate, (authController.register))
router.post('/login',  (authController.login));
router.get('/logout', (authController.logout));

router.get('/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] }),
    function (req, res) {
        res.redirect('/success');
    }

)
router.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
}));

router.get( '/success', auth.authController.isLoggedIn, (req, res) => {
    res.send('You have successfully logged in')
})

router.get( '/failure', (req, res) => {
    res.status(401)
    res.json({
        status: 'failed', 
        message: 'You have failed to log in'})
})




module.exports = router;