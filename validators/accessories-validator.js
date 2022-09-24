const yup = require('yup')

const typeRegex = /^(GPS)|(watch)|(headphones)$/i;


const accessoriesValidator = yup.object({
    type: yup.string().required().matches(typeRegex),
    name: yup.string().trim().required().min(1).max(50),
    brand: yup.string().trim().required().min(2).max(30),
    price: yup.string().trim().required().min(6).max(10),
    picture: yup.string(),
    description: yup.string().trim().required().min(10).max(250),
    chrono: yup.boolean(),
    compass: yup.string().min(2).max(100),
    altimeter: yup.string().min(2).max(100),
    waterproofing: yup.string().required().min(2).max(60),
    autonomy: yup.string().trim().min(2).max(100),
    weather: yup.string().trim().min(2).max(100),


});

module.exports = accessoriesValidator;