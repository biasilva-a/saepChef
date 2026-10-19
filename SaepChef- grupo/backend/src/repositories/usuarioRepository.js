import { query } from "../config/db.js";

export const usuarioRepository = {
  async getAll() {
    const result = await query("SELECT id_usuario, nome, nome_usuario, email, tipo FROM public.tb_usuario");
    return result.rows;
  },

  async getByEmail(email) {
    const result = await query(
      "SELECT * FROM public.tb_usuario WHERE LOWER(TRIM(email)) = LOWER(TRIM($1))",
      [email]
    );
    return result.rows[0];
  },

  async create(usuario) {
    const { id_usuario, nome, nome_usuario, email, senha, imagem_usuario, tipo } = usuario;
    const result = await query(
      `INSERT INTO public.tb_usuario 
       (id_usuario, nome, nome_usuario, email, senha, imagem_usuario, tipo, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()::text, NOW()::text)
       RETURNING id_usuario, nome, nome_usuario, email, tipo`,
      [id_usuario, nome, nome_usuario, email, senha, imagem_usuario, tipo]
    );
    return result.rows[0];
  }
};