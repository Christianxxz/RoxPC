const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoriaController");

console.log("controller:", controller);
console.log("listar:", controller.listar);
console.log("buscarPorId:", controller.buscarPorId);

router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);

module.exports = router;