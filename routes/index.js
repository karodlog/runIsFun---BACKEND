const manshoesRouter = require('./manshoes-router');

// création du routeur Parent
const router = require('express').Router();


//on crée toutes les routes
router.use('/manshoes', manshoesRouter);


module.exports = router