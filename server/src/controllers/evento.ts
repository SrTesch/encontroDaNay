import { Request, Response } from "express";
import { Evento } from "../models/evento";
import eventoServices from "../services/evento";

const eventoController = {
  getInfos: async (_req: Request, res: Response) => {
    try {
      console.log("Pegando dados do evento!");
      const evento = await eventoServices.getInfos();
      if (Array.isArray(evento) && evento.length > 0) {
        console.log("Dados pegos com sucesso!");
        return res.status(200).json(evento);
      }else
        return res.status(400).json({msg:"Não foi possivel encontrar o evento", evento: evento})
      
    } catch (error) {
      console.log("Erro ao buscar informações do evento", error);
      return res.status(500).json({ msg: "Internal Server Error", error: error });
    }
  },
  newEvent: async (req: Request, res: Response) => {
    try {
      console.log("Criando novo evento");
      const { dataHora, local, preço, nome } = req.body;
      const eventInstance = new Evento(0,nome, preço, dataHora, local);
      const result = await eventoServices.newEvent(eventInstance);
      if (Array.isArray(result) && result.length > 0) {
        console.log("Evento criado com sucesso! \nResultado da query: ", result);
        if(Array.isArray(result) && "insertId" in result[0]){
          eventInstance.setId(result[0].insertId)
          console.log("passei pelo if e estou setando o id")
        }
        return res.status(201).json({ result: result, insertedData: eventInstance });
      }
    } catch (error) {
      console.log("Erro ao Criar um novo evento!", error);
      throw new Error("erro ao crirar evento")
      // res.status(500).json({ msg: "Internal Server Error!", error: error });
    }
  },
};

export default eventoController;
