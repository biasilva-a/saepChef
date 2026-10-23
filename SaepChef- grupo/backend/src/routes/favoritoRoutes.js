import express from 'express';
import * as favoritoController from '../controllers/favoritoController.js';

const router = express.Router();

router.post('/favoritos', favoritoController.alternarFavorito);
router.get('/favoritos/chef/:idChef', favoritoController.buscarEstatisticasChef);
router.delete('/favoritos/receitas/:idReceita', favoritoController.removerFavorito);
router.get('/favoritos/usuario/:idUsuario', favoritoController.buscarFavoritosDoUsuario);
router.get('/favoritos/receita/:idReceita/total', favoritoController.buscarTotalDaReceita);

export default router;