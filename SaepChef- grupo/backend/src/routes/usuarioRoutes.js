import express from 'express'; 
import { usuarioController } from '../controllers/usuarioController.js';

const router = express.Router(); 

router.post('/usuario/registro', usuarioController.registro);
router.get('/usuario', usuarioController.getAllUsuarios);
router.get('/usuario/login', usuarioController.login); 

export default router;