const express = require("express");
const accessoriesController = require("../controllers/accessories-controller")
const bodyValidation = require("../middlewares/bodyValidation");
const idValidator = require("../middlewares/idValidator");
const accessoriesValidator = require("../validators/accessories-validator");


const accessoriesRouter = express.Router();



accessoriesRouter.route("/")
    .get(accessoriesController.getAll)
    .post(bodyValidation(accessoriesValidator),accessoriesController.create)


    accessoriesRouter.route("/:id")
    .get(idValidator(), accessoriesController.getById)
    .put(bodyValidation(accessoriesValidator), accessoriesController.update)
    .delete(accessoriesController.delete)


    

module.exports = accessoriesRouter;
