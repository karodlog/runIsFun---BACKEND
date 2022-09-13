const express = require("express");
const manshoesController = require("../controllers/manshoes-controller");
const idValidator = require("../middlewares/idValidator");
const manshoesRouter = express.Router();



manshoesRouter.route("/")
    .get(manshoesController.getAll);
// .post(manshoesController.create)

manshoesRouter.route("/:id")
    .get(idValidator(), manshoesController.getById);


    

module.exports = manshoesRouter;
