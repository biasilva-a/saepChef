import { query } from "../config/db.js";

export const receitaRepository = {

    async getAll() {

        const result = await query(
            "SELECT * FROM tb_receita"
        );

        return result.rows;
    },

    async getById(id) {

        const result = await query(
            "SELECT * FROM tb_receita WHERE id_receita = $1",
            [id]
        );

        return result.rows[0];
    },

    async create(receita) {

        const {
            id_receita,
            titulo_receita,
            origem_receita,
            id_usuario,
            url_imagem
        } = receita;

        const result = await query(
            `INSERT INTO tb_receita
            (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6, $6)
            RETURNING *`,
            [
                id_receita,
                titulo_receita,
                origem_receita,
                id_usuario,
                url_imagem,
                new Date().toISOString()
            ]
        );

        return result.rows[0];
    }
};