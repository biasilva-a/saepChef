
import { query } from "../config/db.js";

export const buscarFavorito = async (idUsuario, idReceita) => {
  const result = await query(
    "SELECT * FROM public.tb_favoritar WHERE id_usuario = $1 AND id_receita = $2",
    [idUsuario, idReceita]
  );
  return result.rows[0];
};

export const adicionarFavorito = async (idUsuario, idReceita) => {
  const result = await query(
    `INSERT INTO public.tb_favoritar
        (id_favorito, id_usuario, id_receita, created_at, updated_at)
        VALUES (
            (SELECT COALESCE(MAX(id_favorito), 0) + 1 FROM public.tb_favoritar),
            $1, $2, NOW()::text, NOW()::text
        )
        RETURNING *`,
    [idUsuario, idReceita]
  );
  return result.rows[0];
};

export const removerFavorito = async (idUsuario, idReceita) => {
  const result = await query(
    "DELETE FROM public.tb_favoritar WHERE id_usuario = $1 AND id_receita = $2 RETURNING *",
    [idUsuario, idReceita]
  );
  return result.rows[0];
}; 

export const contarFavoritosDoChef = async (idChef) => {
    const result = await query(
        `SELECT COUNT(f.id_favorito)::int AS total
         FROM public.tb_favoritar f
         INNER JOIN public.tb_receita r
             ON r.id_receita = f.id_receita
         WHERE r.id_usuario = $1`,
        [idChef]
    );

    return result.rows[0].total;
};


export const buscarFavoritosDoUsuario = async (idUsuario) => {
  const result = await query(
    "SELECT id_receita FROM public.tb_favoritar WHERE id_usuario = $1",
    [idUsuario]
  );
  return result.rows;
};

export const contarFavoritosDaReceita = async (idReceita) => {
  const result = await query(
    "SELECT COUNT(*) AS total FROM public.tb_favoritar WHERE id_receita = $1",
    [idReceita]
  );
  return Number(result.rows[0].total);
};