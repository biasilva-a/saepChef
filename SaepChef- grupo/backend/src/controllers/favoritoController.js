import * as repo from '../repositories/favoritoRepository.js';

export const alternarFavorito = async (req, res) => {
  try {
    const { idUsuario, idReceita } = req.body;
    if (!idUsuario || !idReceita) {
      return res.status(400).json({ mensagem: 'idUsuario e idReceita são obrigatórios' });
    }

    const existe = await repo.buscarFavorito(idUsuario, idReceita);

    if (existe) {
      await repo.removerFavorito(idUsuario, idReceita); 
      return res.status(200).json({ ativado: false, mensagem: 'Favorito removido' });
    } else {
      await repo.adicionarFavorito(idUsuario, idReceita);
      return res.status(201).json({ ativado: true, mensagem: 'Favorito adicionado' });
    }
  } catch (err) {
    console.error('Erro em alternarFavorito:', err);
    return res.status(500).json({ mensagem: 'Erro ao alternar favorito' });
  }
};

export const buscarEstatisticasChef = async (req, res) => {
  try {
    const { idChef } = req.params;

    if (!idChef) {
      return res.status(400).json({ mensagem: 'ID do chef é obrigatório' });
    }

    const totalFavoritos = await repo.contarFavoritosDoChef(idChef);
    return res.status(200).json({ totalFavoritos });
  } catch (err) {
    console.error('Erro em buscarEstatisticasChef:', err);
    return res.status(500).json({ mensagem: 'Erro ao buscar estatísticas do chef' });
  }
};