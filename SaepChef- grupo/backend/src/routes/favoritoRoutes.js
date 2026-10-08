import express from 'express'; 
import { favoritoController } from '../controllers/favoritoController';

const router = express.Router(); 

router.post('/favorito/registro', favoritoController.favoritoRegistro);
router.get('/favorito', favoritoController.getAllFavoritos);
router.get('/favorito/receita', favoritoController.receitabyId); 
router.delete('/favorito/receita', favoritoController.delete)

export default router;