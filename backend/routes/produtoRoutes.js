const express = require("express");
const router = express.Router();
const controller = require("../controllers/produtoController");

router.get("/buscar/:nome", controller.buscarPorNome);
router.get("/categoria/:id", controller.buscarPorCategoria);
router.get("/:id", controller.buscarPorId);
router.get("/", controller.listar);

module.exports = router;