const express = require("express");
const router = express.Router();
const controller = require("../controllers/carrinhoController");

router.post("/", controller.adicionar);
router.get("/:userId", controller.listar);
router.delete("/:id", controller.remover);

module.exports = router;