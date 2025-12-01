const Livro = require("../models/Livro");
const Autor = require("../models/Autor");
const Genero = require("../models/Genero");

module.exports = {
  criarLivro: async (req, res) => {
  try {
    const { titulo, autorId, generoId } = req.body;

    if (!titulo || !autorId || !generoId) {
      return res.status(400).json({ erro: "Título, autorId e generoId são obrigatórios" });
    }

    // Verificar se o autor existe
    const autor = await Autor.findByPk(autorId);
    if (!autor) {
      return res.status(404).json({ erro: "Autor não encontrado" });
    }

    // Verificar se o gênero existe
    const genero = await Genero.findByPk(generoId);
    if (!genero) {
      return res.status(404).json({ erro: "Gênero não encontrado" });
    }

    // Criar o livro
    const livro = await Livro.create({ titulo, autorId, generoId });

    res.status(201).json(livro);

  } catch (error) {
    console.error("ERRO AO CRIAR LIVRO:", error); // <-- agora mostra o erro real
    res.status(500).json({ erro: "Erro ao criar livro" });
  }
},


  listarLivros: async (req, res) => {
    try {
      const livros = await Livro.findAll({
        include: [
          { model: Autor, attributes: ["nome"] },
          { model: Genero, attributes: ["nome"] }
        ]
      });

      res.json(livros);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao listar livros" });
    }
  },

  obterLivroPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const livro = await Livro.findByPk(id, {
        include: [
          { model: Autor, attributes: ["nome"] },
          { model: Genero, attributes: ["nome"] }
        ]
      });

      if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }

      res.json(livro);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar livro por ID" });
    }
  },

  atualizarLivro: async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, autorId, generoId } = req.body;

      const livro = await Livro.findByPk(id);

      if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }

      livro.titulo = titulo || livro.titulo;
      livro.autorId = autorId || livro.autorId;
      livro.generoId = generoId || livro.generoId;

      await livro.save();

      res.json(livro);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar livro" });
    }
  },

  excluirLivro: async (req, res) => {
    try {
      const { id } = req.params;

      const livro = await Livro.findByPk(id);

      if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }

      await livro.destroy();
      res.json({ mensagem: "Livro excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao excluir livro" });
    }
  }
};
