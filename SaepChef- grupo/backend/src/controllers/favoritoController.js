import e from 'express';
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
    const totalFavoritos = await repo.contarFavoritosDoChef(idChef);

    return res.status(200).json({ totalFavoritos });
  } catch (err) {
    console.error("Erro ao buscar estatísticas do chef:", err);
    return res.status(500).json({
      mensagem: "Erro ao buscar estatísticas do chef"
    });
  }
};

export const removerFavorito = async (req, res) => {
  try {
    const { idUsuario, idReceita } = req.body;
    if (!idUsuario || !idReceita) {
      return res.status(400).json({ mensagem: 'idUsuario e idReceita são obrigatórios' });
    }

    const favorito = await repo.buscarFavorito(idUsuario, idReceita);
    if (!favorito) {
      return res.status(404).json({ mensagem: 'Favorito não encontrado' });
    }

    await repo.removerFavorito(idUsuario, idReceita);
    return res.status(200).json({ mensagem: 'Favorito removido' });
  } catch (err) {
    console.error('Erro em removerFavorito:', err);
    return res.status(500).json({ mensagem: 'Erro ao remover favorito' });
  }
};

export const buscarFavoritosDoUsuario = async (req, res) => {
  try {
    const { idUsuario } = req.params;
    const favoritos = await repo.buscarFavoritosDoUsuario(idUsuario);
    return res.status(200).json(favoritos);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ mensagem: "Erro ao buscar favoritos" });
  }
};

export const buscarTotalDaReceita = async (req, res) => {
  try {
    const { idReceita } = req.params;
    const total = await repo.contarFavoritosDaReceita(idReceita);
    return res.status(200).json({ total });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ mensagem: "Erro ao contar favoritos" });
  }
};