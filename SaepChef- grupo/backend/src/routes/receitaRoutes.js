import express from 'express'; 
import { receitaController } from '../controllers/receitaController.js';

const router = express.Router(); 

router.post('/receita/registro', receitaController.receitaRegistro);
router.get('/receita', receitaController.getAllReceita);
router.get('/receita/ById', receitaController.ById); 

export default router;