import { query } from "../config/db.js";

export const receitaRepository = {
  async getAll() {
    const result = await query("SELECT * FROM public.tb_receita");
    return result.rows;
  },

  async getById(id) {
    const result = await query("SELECT * FROM public.tb_receita WHERE id_receita = $1", [id]);
    return result.rows[0];
  },

  async getByChef(idChef) {
    const result = await query("SELECT * FROM public.tb_receita WHERE id_usuario = $1", [idChef]);
    return result.rows;
  },

  async create(receita) {
    const { id_receita, titulo_receita, origem_receita, id_usuario, url_imagem } = receita;
    const result = await query(
      `INSERT INTO public.tb_receita 
       (id_receita, titulo_receita, origem_receita, id_usuario, url_imagem, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, NOW()::text, NOW()::text)
       RETURNING *`,
      [id_receita, titulo_receita, origem_receita, id_usuario, url_imagem]
    );
    return result.rows[0];
  },

  async delete(id) {
    const result = await query("DELETE FROM public.tb_receita WHERE id_receita = $1 RETURNING *", [id]);
    return result.rows[0];
  }
};