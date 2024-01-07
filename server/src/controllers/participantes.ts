import { Request, Response } from "express";
import { Participante } from "../models/participantes";
import participantesServices from "../services/participantes";
const participantesController = {
    pegarTudo : async (_req: Request, res: Response) =>{
        try{
            const Participantes = await participantesServices.pegarTudo();
            if(Participantes == "Nada")
                return res.status(400).json({msg:"Não há nenhum participante cadastrado"});

            return res.status(200).json(Participantes);
        }catch(error){
            console.log(error);
            return res.status(500).json({msg:"Erro ao pegar dados dos participantes"});
        }
    },
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
    updateStatus : async (req: Request, res: Response) =>{
        const {cpf, status} = req.body;
        try{
            const updated = await participantesServices.updateStatus(cpf, status);
            res.status(200).json({msg: `Status do Participante alterado para "${status}" com sucesso!`});
        }catch(error){
            console.log(error);
            return res.status(500).json({msg:`Erro ao atualizar status do Usuário com cpf: ${cpf}\n`});
        }
    },
    deletar : async (req: Request, res : Response) =>{
        try{
            const cpf = req.body.cpf;
            const deletedPerson = await participantesServices.deletar(cpf);
            res.status(201).json(deletedPerson); 
        }catch(error){
            console.error(error);
            res.status(500).json({error: 'Internal Server Error on deleting a person from database'})
        }
    },
    deletarTudo : async (_req: Request, res: Response) =>{
        try{
            const deletados = await participantesServices.deletarTudo();
            console.log("Participantes deletados com sucesso!");
            res.status(200).send(`Foram excluidos ${deletados} participantes`);
        }catch(error){
            console.log(error);
            return res.status(500).send("Erro ao Deletar todos os participantes");
        }
    }
}

export default participantesController;