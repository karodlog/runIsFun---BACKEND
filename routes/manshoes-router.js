const express = require("express");
const manshoesController = require("../controllers/manshoes-controller");
const bodyValidation = require("../middlewares/bodyValidation");
const idValidator = require("../middlewares/idValidator");
const manshoesValidator = require("../validators/manshoes-validator");
const manshoesRouter = express.Router();



manshoesRouter.route("/")
    .get(manshoesController.getAll)
    .post(bodyValidation(manshoesValidator),manshoesController.create)

manshoesRouter.route("/:id")
    .get(idValidator(), manshoesController.getById)
    .put(bodyValidation(manshoesValidator), manshoesController.update)
    .delete(manshoesController.delete)


    

module.exports = manshoesRouter;
