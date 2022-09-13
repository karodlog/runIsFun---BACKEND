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
    }
}


module.exports = manshoesController;