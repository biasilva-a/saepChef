import { query } from "../config/db.js";

export const getAll = async () => {
    const result = await query("SELECT * FROM tb_receita");
    return result.rows;
};

export const getById = async (id) => {
    const result = await query(
        "SELECT * FROM tb_receita WHERE id_receita = $1",
        [id]
    );
    return result.rows[0];
};

export const create = async (receita) => {
    const { titulo_receita, origem_receita, id_usuario, url_imagem } = receita;

    const result = await query(
        `INSERT INTO tb_receita 
        (titulo_receita, origem_receita, id_usuario, url_imagem)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [titulo_receita, origem_receita, id_usuario, url_imagem]
    );

    return result.rows[0];
};

export const remove = async (id) => {
    const result = await query(
        "DELETE FROM tb_receita WHERE id_receita = $1 RETURNING *",
        [id]
    );

    return result.rows[0];
};