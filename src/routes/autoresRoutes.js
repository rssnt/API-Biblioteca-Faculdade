const express = require("express");
const router = express.Router();
const autorController = require("../controllers/autoresController");

router.post("/", autorController.criarAutor);
router.get("/", autorController.listarAutores);
router.get("/:id", autorController.obterAutorPorId);
router.put("/:id", autorController.atualizarAutor);
router.delete("/:id", autorController.excluirAutor);

module.exports = router;
