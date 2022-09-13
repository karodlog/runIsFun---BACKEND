const customerController = require('../controllers/customer-controller')

const customerRouter = require('express').Router()

customerRouter.route('/')
    .get(customerController.getAll)


module.exports = customerRouter;