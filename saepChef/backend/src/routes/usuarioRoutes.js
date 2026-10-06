import express from 'express'; 
import { usuarioController } from '../controllers/usuarioController.js';

const router = express.Router(); 

router.get('/usuario/login', usuarioController.login); 

export default router;