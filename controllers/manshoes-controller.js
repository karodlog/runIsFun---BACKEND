const Manshoes = require("../models/manshoes-model")



const manshoesController = {
    getAll: async (req, res)=>{
        const manshoesAll = await Manshoes.find();
        res.status(200).json(manshoesAll);
    },

    getById: async (req, res)=>{
        const id = req.params.id;
        const manshoesOne = await Manshoes.findById(id);

        if(manshoesOne){
            res.status(200).json(manshoesOne);
        }
        else{
            return res.sendStatus(404);
        }
    },
    create: async(req, res)=>{
        const manshoesToAdd = Manshoes(req.body);
        await manshoesToAdd.save();
        res.status(200).json(manshoesToAdd);
    },
    update: async(req, res)=>{
        const id = req.params.id;
        const {name,brand,price,picture,description,picto,activity,shoesWeight,promo,barredPrice} = req.body
        const manshoesUpdate = await Manshoes.findByIdAndUpdate(id,{
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
        if(manshoesUpdate){
            res.status(200).json(manshoesUpdate);
        }
        else{
            return res.senStatus(404);
        }

    },
    delete: async (req, res)=>{
        const id = req.params.id;
        const manshoesDelete = await Manshoes.findByIdAndDelete(id);
        if(manshoesDelete){
            res.sendStatus(204)
        }
        else{
            return res.sendStatus(404);
        }
    }
}


module.exports = manshoesController;