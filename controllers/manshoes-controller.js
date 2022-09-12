const Manshoes = require("../models/manshoes-model")



const manshoesController = {
    getAll: async (req, res)=>{
        const manshoes = await Manshoes.find();
        res.status(200).json(manshoes);
    }
}


module.exports = manshoesController;