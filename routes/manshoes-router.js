const express = require('express');
const manshoesController = require('../controllers/manshoes-controller');
const manshoesRouter = express.Router();


manshoesRouter.route('/')
.get(manshoesController.getAll)

module.exports = manshoesRouter