const authRouter = require('./auth-router');
const customerRouter = require('./customer-router');
const manshoesRouter = require('./manshoes-router');


// création du routeur Parent
const router = require('express').Router();


//on crée toutes les routes
router.use('/manshoes', manshoesRouter);
router.use('/womanshoes');

router.use('/auth',authRouter)
router.use('/customer', customerRouter)


module.exports = router