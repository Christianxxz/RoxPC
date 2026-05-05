const express = require("express");
const router = express.Router();
const controller = require("../controllers/produtoController");

router.get("/", controller.listar);
router.get("/categoria/:id", controller.buscarPorCategoria);
router.get("/:id", controller.buscarPorId);

module.exports = router;