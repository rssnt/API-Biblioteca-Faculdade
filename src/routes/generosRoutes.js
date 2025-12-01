const express = require("express");
const router = express.Router();
const generoController = require("../controllers/generosController");

router.post("/", generoController.criarGenero);
router.get("/", generoController.listarGeneros);
router.get("/:id", generoController.obterGeneroPorId);
router.put("/:id", generoController.atualizarGenero);
router.delete("/:id", generoController.excluirGenero);

module.exports = router;
