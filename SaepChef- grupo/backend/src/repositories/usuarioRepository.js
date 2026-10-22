
import { query } from "../config/db.js";

export const usuarioRepository = {
  async getAll() {
    const result = await query("SELECT id, nome, nome_usuario, email, tipo FROM public.tb_usuario");
    return result.rows;
  },

  async getusuarioByid(id) {
    const result = await query(
      "SELECT * FROM public.tb_usuario WHERE id = $1",
      [id]
    );
    return result.rows[0];
  },

  async getByEmail(email) {
    const result = await query(
      "SELECT * FROM public.tb_usuario WHERE email = $1",
      [email]
    );
    return result.rows[0];
  },

  async create(usuario) {
    const { id, nome, nome_usuario, email, senha, imagem_usuario, tipo } = usuario;

    const result = await query(
      `INSERT INTO public.tb_usuario
       (id, nome, nome_usuario, email, senha, imagem_usuario, tipo, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()::text, NOW()::text)
       RETURNING id, nome, nome_usuario, email, imagem_usuario, tipo`,
      [id, nome, nome_usuario, email, senha, imagem_usuario, tipo]
    );

    return result.rows[0];
  }
};
