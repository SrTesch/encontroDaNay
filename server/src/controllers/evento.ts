import { Request, Response } from "express";
import { Evento } from "../models/evento";
import eventoServices from "../services/evento";
const eventoController = {
    getInfos: async (_req: Request, res: Response) =>{
        const evento = await eventoServices.getInfos();
        if(evento instanceof Error){
        
        }
    }
}

export default eventoController