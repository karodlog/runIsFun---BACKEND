const yup = require('yup');

const customerValidator = yup.object({
    email: yup.string().trim().required().min(3).max(50),
    firstname: yup.string().trim().required().max(150),
    lastname: yup.string().trim().required().max(150)
});

module.exports = customerValidator;