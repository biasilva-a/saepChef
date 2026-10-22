import express from "express";
import { usuarioController } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/usuarios/registro", usuarioController.registro);
router.post("/usuarios/login", usuarioController.login);
router.get("/usuarios", usuarioController.getAllUsuarios);
router.get("/usuarios/:id", usuarioController.getUsuarioById);

export default router;