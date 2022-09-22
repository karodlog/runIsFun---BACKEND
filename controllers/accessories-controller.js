const Accessories = require("../models/accessories-model")


const accessoriesController = {
    getAll: async (req, res)=>{
        const accessoriesAll = await Accessories.find();
        res.status(200).json(accessoriesAll);
    },

    getById: async (req, res)=>{
        const id = req.params.id;
        const assessoryOne = await Accessories.findById(id);

        if(assessoryOne){
            res.status(200).json(assessoryOne);
        }
        else{
            return res.sendStatus(404);
        }
    },
    create: async(req, res)=>{
        const accessoriesToAdd = Accessories(req.body);
        await accessoriesToAdd.save();
        res.status(200).json(accessoriesToAdd);
    },
    update: async(req, res)=>{
        const id = req.params.id;
        const {type,name,brand,price,picture,description,chrono,compass,altimeter,waterproofing, autonomy,weather} = req.body
        const accessoriesUpdate = await Accessories.findByIdAndUpdate(id,{
            
            type,
            name,
            brand,
            price,
            picture,
            description,
            chrono,
            compass,
            altimeter,
            waterproofing,
            autonomy,
            weather


        },{returnDocument: 'after'});
        if(accessoriesUpdate){
            res.status(200).json(accessoriesUpdate);
        }
        else{
            return res.senStatus(404);
        }

    },
    delete: async (req, res)=>{
        const id = req.params.id;
        const accessoriesDelete = await Accessories.findByIdAndDelete(id);
        if(accessoriesDelete){
            res.sendStatus(204)
        }
        else{
            return res.sendStatus(404);
        }
    }
}


module.exports = accessoriesController;