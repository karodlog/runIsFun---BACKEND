const express = require("express");
const womanshoesController = require("../controllers/womanshoes-controller");
const bodyValidation = require("../middlewares/bodyValidation");
const idValidator = require("../middlewares/idValidator");
const womanshoesValidator = require("../validators/womanshoes-validator");
const womanshoesRouter = express.Router();



womanshoesRouter.route("/")
    .get(womanshoesController.getAll)
    .post(bodyValidation(womanshoesValidator),womanshoesController.create)

womanshoesRouter.route("/:id")
    .get(idValidator(), womanshoesController.getById)
    .put(bodyValidation(womanshoesValidator), womanshoesController.update)
    .delete(womanshoesController.delete)


    

module.exports = womanshoesRouter;
