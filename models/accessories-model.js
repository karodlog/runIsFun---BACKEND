const {Schema, model} = require('mongoose');


const accessoriesSchema = new Schema({
    type:{
        type: String,
        enum: ["GPS", "watch", "headphones"],
        required: true
    },
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
    chrono:{
        type: Boolean,
        required: false,
    },
    compass:{
        type: String,
        required: false,
        trim: true
    },
    altimeter:{
        type: String,
        required: false,
        trim: true
    },
    waterproofing:{
        type: String,
        required: true,
        trim: true
    },
    autonomy:{
        type: String,
        required: false,
        trim: true
    },
    weather:{
        type: String,
        required: false,
        trim: true

    }


},{
    collection: 'Accessories',
    timestamps: true
});

const Accessories = model('Accessories', accessoriesSchema);
module.exports = Accessories