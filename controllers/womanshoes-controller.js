const Womanshoes = require("../models/womanshoes-model")



const womanshoesController = {
    getAll: async (req, res)=>{
        const womanshoesAll = await Womanshoes.find();
        res.status(200).json(womanshoesAll);
    },

    getById: async (req, res)=>{
        const id = req.params.id;
        const womanshoesOne = await Womanshoes.findById(id);

        if(womanshoesOne){
            res.status(200).json(womanshoesOne);
        }
        else{
            return res.sendStatus(404);
        }
    },
    create: async(req, res)=>{
        const womanshoesToAdd = Womanshoes(req.body);
        await womanshoesToAdd.save();
        res.status(200).json(womanshoesToAdd);
    },
    update: async(req, res)=>{
        const id = req.params.id;
        const {name,brand,price,picture,description,picto,activity,shoesWeight,promo,barredPrice} = req.body
        const womanshoesUpdate = await Womanshoes.findByIdAndUpdate(id,{
            name,
            brand,
            price,
            picture,
            description,
            picto,
            activity,
            shoesWeight,
            promo,
            barredPrice

        },{returnDocument: 'after'});
        if(womanshoesUpdate){
            res.status(200).json(womanshoesUpdate);
        }
        else{
            return res.senStatus(404);
        }

    },
    delete: async (req, res)=>{
        const id = req.params.id;
        const womanshoesDelete = await Womanshoes.findByIdAndDelete(id);
        if(womanshoesDelete){
            res.sendStatus(204)
        }
        else{
            return res.sendStatus(404);
        }
    }
}


module.exports = womanshoesController;