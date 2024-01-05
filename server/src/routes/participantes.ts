import { Router } from "express";
import participantesController from '../controllers/participantes'
const router = Router();

router.get("/pegarTudo", participantesController.pegarTudo);

router.post("/novo", participantesController.newParticipante);

router.post("/confirmar", participantesController.updateStatus);

router.delete("/deletar", participantesController.deletar);

router.delete("/deletarTodos", participantesController.deletarTudo);

export default router;