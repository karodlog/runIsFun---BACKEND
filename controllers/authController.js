const Customer = require('../models/customer-model')
const argon2 = require('argon2');
const jwtUtils = require('../token/jwtUtils');

const authController = {
    login: async (req, res) =>{
        const {credential, password} = req.body;
        const customer = await Customer.findOne({email: credential})
        if(!customer){
            return res.status(401).json({error: 'Bad credentials email'})
        }

        const isPassWordValid = await argon2.verify(customer.password, password);
        if(!isPassWordValid)
        {
            return res.status(401).json({error: 'Bad credentials pwd'})
        }

        const token = await jwtUtils.generate(customer);
        return res.json({token});
    },

    register: async (req, res)=>{
        const {email, lastname, firstname, password} = req.body;

        // hashage du password
        const hashedPassword = await argon2.hash(password);

        const customerToInsert = Customer({
            email,
            lastname,
            firstname,
            password: hashedPassword
        });
        await customerToInsert.save();
        const token = await jwtUtils.generate(customerToInsert);
        return res.json({token});

    }
}


module.exports = authController;