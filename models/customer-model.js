const {Schema, model} = require('mongoose');

const customerSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        enum: ['User', 'Moderator', 'Admin'],
        required: true,
        default: 'User'
    }
},{
    collection: 'Customer',
    timestamps: true
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;