const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livrosController");

router.post("/", livroController.criarLivro);
router.get("/", livroController.listarLivros);
router.get("/:id", livroController.obterLivroPorId);
router.put("/:id", livroController.atualizarLivro);
router.delete("/:id", livroController.excluirLivro);

module.exports = router;
