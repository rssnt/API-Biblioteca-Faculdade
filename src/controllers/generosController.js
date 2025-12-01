const Genero = require("../models/Genero");

module.exports = {
  criarGenero: async (req, res) => {
    try {
      const { nome } = req.body;

      if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
      }

      const genero = await Genero.create({ nome });
      res.status(201).json(genero);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar gênero" });
    }
  },

  listarGeneros: async (req, res) => {
    try {
      const generos = await Genero.findAll();
      res.json(generos);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao listar gêneros" });
    }
  },

  obterGeneroPorId: async (req, res) => {
    try {
      const { id } = req.params;
      const genero = await Genero.findByPk(id);

      if (!genero) {
        return res.status(404).json({ erro: "Gênero não encontrado" });
      }

      res.json(genero);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar gênero por ID" });
    }
  },

  atualizarGenero: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome } = req.body;

      const genero = await Genero.findByPk(id);

      if (!genero) {
        return res.status(404).json({ erro: "Gênero não encontrado" });
      }

      genero.nome = nome || genero.nome;
      await genero.save();

      res.json(genero);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar gênero" });
    }
  },

  excluirGenero: async (req, res) => {
    try {
      const { id } = req.params;

      const genero = await Genero.findByPk(id);

      if (!genero) {
        return res.status(404).json({ erro: "Gênero não encontrado" });
      }

      await genero.destroy();
      res.json({ mensagem: "Gênero excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao excluir gênero" });
    }
  }
};
