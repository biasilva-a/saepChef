import express from "express";
import { receitaController } from "../controllers/receitaController.js";

const router = express.Router();

router.get("/receitas", receitaController.getAllReceitas);
router.get("/receitas/:id", receitaController.getReceitaById);
router.get("/receitas/chef/:idChef", receitaController.getReceitasByChef);
router.post("/receitas", receitaController.criarReceita);
router.delete("/receitas/:id", receitaController.deletarReceita);

export default router;