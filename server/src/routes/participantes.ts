import { Router } from "express";
import participantesController from '../controllers/participantes'
const router = Router();

router.post("/novo", participantesController.newParticipante);

router.delete("/deletar", participantesController.deletar);

export default router;