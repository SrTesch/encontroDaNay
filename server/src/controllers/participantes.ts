import { Request, Response } from "express";
import { Participante } from "../models/participantes";
import participantesServices from "../services/participantes";
const participantesController = {
    newParticipante : async (req: Request, res: Response)=>{
        try {
            const {name, cpf, tel, prof} = req.body;
            const partInstance = new Participante(cpf,name,tel,prof)
            const newPerson = await participantesServices.newParticipante(partInstance);
            res.status(201).json(newPerson)
        }catch (error){
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'})
        }
    },
    deletar : async (req: Request, res : Response) =>{
        try{
            const cpf = req.body.cpf;
            const partInstance = new Participante(cpf, "", "", "");
            const deletedPerson = await participantesServices.deletar(partInstance);
            res.status(201).json(deletedPerson); 
        }catch(error){
            console.error(error);
            res.status(500).json({error: 'Internal Server Error on deleting a person from database'})
        }
    }
}

export default participantesController;