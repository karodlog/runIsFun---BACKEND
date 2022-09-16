const yup = require('yup')

const activityRegex = /^(trail)|(running)|(hike)$/i;
const promoRegex = /^(new)|(discount)|(goodDeal)$/i;

const womanshoesValidator = yup.object({
    name: yup.string().trim().required().min(1).max(50),
    brand: yup.string().trim().required().min(2).max(30),
    price: yup.string().trim().required().min(6).max(10),
    picture: yup.string(),
    description: yup.string().trim().required().min(10).max(250),
    picto: yup.string().trim().required(),
    activity: yup.string().required().matches(activityRegex),
    shoesWeight: yup.string().required().trim().min(3).max(6),
    promo: yup.string().required().matches(promoRegex),
    barredPrice: yup.string().trim()

});

module.exports = womanshoesValidator;