import { Router } from "express";
import eventoController from "../controllers/evento";

const router = Router();

router.get("/", eventoController.getInfos);

export default router;