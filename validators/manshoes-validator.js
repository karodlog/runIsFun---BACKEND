const yup = require('yup')

const manshoesValidator = yup.object({
    name: yup.string().trim().required().min(1).max(50),
    brand: yup.string().trim().required().min(2).max(30),
})