import { receitaRepository } from "../repositories/receitaRepository.js";

export const receitaController = {

    async getAllReceitas(req, res) {

        try {

            const receitas = await receitaRepository.getAll();

            return res.status(200).json(receitas);

        } catch (error) {

            console.error("Erro ao buscar receitas:", error);

            return res.status(500).json({
                erro: "Erro interno do servidor."
            });
        }
    },

    async getReceitaById(req, res) {

        try {

            const { id } = req.params;

            const receita = await receitaRepository.getById(id);

            if (!receita) {
                return res.status(404).json({
                    erro: "Receita não encontrada."
                });
            }

            return res.status(200).json(receita);

        } catch (error) {

            console.error("Erro ao buscar receita:", error);

            return res.status(500).json({
                erro: "Erro interno do servidor."
            });
        }
    },

    async criarReceita(req, res) {

        try {

            const {
                id_receita,
                titulo_receita,
                origem_receita,
                id_usuario,
                url_imagem
            } = req.body;

            if (!id_receita) {
                return res.status(400).json({
                    erro: "O ID da receita é obrigatório."
                });
            }

            if (!titulo_receita) {
                return res.status(400).json({
                    erro: "O título da receita é obrigatório."
                });
            }

            if (!origem_receita) {
                return res.status(400).json({
                    erro: "A origem da receita é obrigatória."
                });
            }

            if (!id_usuario) {
                return res.status(400).json({
                    erro: "O usuário é obrigatório."
                });
            }

            if (!url_imagem) {
                return res.status(400).json({
                    erro: "A imagem da receita é obrigatória."
                });
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

            return res.status(500).json({
                erro: "Erro interno do servidor."
            });
        }
    }
};