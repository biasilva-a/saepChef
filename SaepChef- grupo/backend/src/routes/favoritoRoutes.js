import express from 'express'; 
import * as favoritoController from '../controllers/favoritoController.js';

const router = express.Router(); 

router.post('/favoritos', favoritoController.alternarFavorito);
router.get('/favoritos/chef/:idChef', favoritoController.buscarEstatisticasChef);

export default router;