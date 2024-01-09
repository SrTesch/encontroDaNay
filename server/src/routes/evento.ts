import { Router } from "express";
import eventoController from "../controllers/evento";

const router = Router();

router.get("/allInfos", eventoController.getInfos);

router.post("/newEvent", eventoController.newEvent);

export default router;