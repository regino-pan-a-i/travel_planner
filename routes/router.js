const express = require('express');
const router = express.Router()
const travelRouter = require('./travelRouter.js')
const userRouter = require('./userRouter.js')
const authRouter = require('./authRouter.js')
const session = require('express-session')
const passport = require('passport');

/********************
 * Middleware
 ***************/

router.use(session({
    secret: 'Attempt1',
    resave: false,
    saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());


/****************************************
* Routes
* **************************************/



router.get('/', (req, res, next) => {
    // res.send('Welcome to the Travel Planner API');
    res.send('<a href="/auth/google">Login with Google</a>');
    // res.send('<a href="/auth/register">Register your account</a> <a href="/auth/login">Login to your account</a>');
})
router.use('/travel',travelRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)



module.exports = router;