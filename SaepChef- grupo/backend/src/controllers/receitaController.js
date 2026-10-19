import { receitaRepository } from "../repositories/receitaRepository.js";

export const receitaController = {
  async getAllReceitas(req, res) {
    try {
      const receitas = await receitaRepository.getAll();
      return res.status(200).json(receitas);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
      return res.status(500).json({ erro: "Erro interno do servidor." });
    }
  },

  async getReceitaById(req, res) {
    try {
      const { id } = req.params;
      const receita = await receitaRepository.getById(id);

      if (!receita) {
        return res.status(404).json({ erro: "Receita não encontrada." });
      }

      return res.status(200).json(receita);
    } catch (error) {
      console.error("Erro ao buscar receita por ID:", error);
      return res.status(500).json({ erro: "Erro interno do servidor." });
    }
  },

  async getReceitasByChef(req, res) {
    try {
      const { idChef } = req.params;
      const receitas = await receitaRepository.getByChef(idChef);
      return res.status(200).json(receitas);
    } catch (error) {
      console.error("Erro ao buscar receitas do chef:", error);
      return res.status(500).json({ erro: "Erro interno do servidor." });
    }
  },

  async criarReceita(req, res) {
    try {
      const { id_receita, titulo_receita, origem_receita, id_usuario, url_imagem } = req.body;

      if (!id_receita || !titulo_receita || !origem_receita || !id_usuario || !url_imagem) {
        return res.status(400).json({ erro: "Todos os campos (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem) são obrigatórios." });
      }

      const receita = await receitaRepository.create({
        id_receita,
        titulo_receita,
        origem_receita,
        id_usuario,
        url_imagem
      });

      return res.status(201).json(receita);
    } catch (error) {
      console.error("Erro ao criar receita:", error);
      return res.status(500).json({ erro: "Erro interno do servidor." });
    }
  },

  async deletarReceita(req, res) {
    try {
      const { id } = req.params;
      const receitaExcluida = await receitaRepository.delete(id);

      if (!receitaExcluida) {
        return res.status(404).json({ erro: "Receita não encontrada." });
      }

      return res.status(200).json({ mensagem: "Receita excluída com sucesso." });
    } catch (error) {
      console.error("Erro ao deletar receita:", error);
      return res.status(500).json({ erro: "Erro interno do servidor." });
    }
  }
};