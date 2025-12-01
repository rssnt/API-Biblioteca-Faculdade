const Autor = require("../models/Autor");

module.exports = {
  criarAutor: async (req, res) => {
    try {
      const { nome } = req.body;

      if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
      }

      const autor = await Autor.create({ nome });
      res.status(201).json(autor);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar autor" });
    }
  },

  listarAutores: async (req, res) => {
    try {
      const autores = await Autor.findAll();
      res.json(autores);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao listar autores" });
    }
  },

  obterAutorPorId: async (req, res) => {
    try {
      const { id } = req.params;
      const autor = await Autor.findByPk(id);

      if (!autor) {
        return res.status(404).json({ erro: "Autor não encontrado" });
      }

      res.json(autor);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar autor por ID" });
    }
  },

  atualizarAutor: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome } = req.body;

      const autor = await Autor.findByPk(id);

      if (!autor) {
        return res.status(404).json({ erro: "Autor não encontrado" });
      }

      autor.nome = nome || autor.nome;
      await autor.save();

      res.json(autor);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar autor" });
    }
  },

  excluirAutor: async (req, res) => {
    try {
      const { id } = req.params;

      const autor = await Autor.findByPk(id);

      if (!autor) {
        return res.status(404).json({ erro: "Autor não encontrado" });
      }

      await autor.destroy();
      res.json({ mensagem: "Autor excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao excluir autor" });
    }
  }
};
