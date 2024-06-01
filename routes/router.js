const express = require('express');
const router = express.Router()
const travelRouter = require('./travelRouter.js')
const userRouter = require('./userRouter.js')



/****************************************
* Routes
* **************************************/

router.get('/', (req, res, next) => {
    res.send('Welcome to the Travel Planner API');
})
router.use('/travel',travelRouter)
router.use('/user', userRouter)

module.exports = router;