const yup = require('yup');

//le password doit contenir au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial
const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;

const registerValidator = yup.object({
    email : yup.string().trim().required().max(255),
    firstname : yup.string().trim().required().max(150),
    lastname : yup.string().trim().required().max(150),
    password : yup.string().required().min(8).max(64).matches(pwdRegex)
});

const loginValidator = yup.object({
    credential : yup.string().trim().required().max(255),
    password : yup.string().required()
});

module.exports = { registerValidator, loginValidator}