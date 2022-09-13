const Customer = require('../models/customer-model');

const customerController={
    getAll: async (req, res)=>{
        const customersAll = await Customer.find();
        res.status(200).json(customersAll)
    }
}


module.exports = customerController;