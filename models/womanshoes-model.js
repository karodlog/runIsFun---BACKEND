
const {Schema, model} = require('mongoose');


const womanshoesSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true       
    },
    brand:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: String,
        required: true,
        trim: true
    },
    picture:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    picto:{
        type: String,
        required: true,
        trim: true
    },
    activity:{
        type: String,
        enum: ['trail', 'running', 'hike'],
        required: true
    },
    shoesWeight:{
        type: String,
        required: true,
        trim: true
    },
    promo:{
        type: String,
        required: true,
        enum: ['new', 'discount', 'goodDeal']
    },
    barredPrice:{
        type: String,
        required: false,
        trim: true
    }
},{
    collection: 'WomanShoes',
    timestamps: true
});

const Womanshoes = model('WomanShoes', womanshoesSchema);
module.exports = Womanshoes