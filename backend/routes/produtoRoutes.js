const express = require("express");
const router = express.Router();
const controller = require("../controllers/produtoController");

router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.get("/categoria/:id", controller.buscarPorCategoria);

module.exports = router;