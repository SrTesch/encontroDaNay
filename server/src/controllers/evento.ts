import { Request, Response } from "express";
import { Evento } from "../models/evento";
import eventoServices from "../services/evento";

const eventoController = {
  getInfos: async (_req: Request, res: Response) => {
    try {
      console.log("Pegando dados do evento!");
      const [evento]: Evento[] = await eventoServices.getInfos();
      if (evento && evento.length > 0) {
        console.log("Dados pegos com sucesso!");
        return res.status(200).json(evento);
      }
    } catch (error) {
      console.log("Erro ao buscar informações do evento", error);
      return res.status(500).json({ msg: "Internal Server Error", error: error });
    }
  },
  newEvent: async (req: Request, res: Response) => {
    try {
      console.log("Criando novo evento");
      const { dataHora, local, preço, nome } = req.body;
      const eventInstance = new Evento(nome, preço, dataHora, local);
      const result: any[] = await eventoServices.newEvent(eventInstance);
      if (result && result.length > 0) {
        console.log("Evento criado com sucesso! \nResultado da query: ", result);
        return res.status(201).json({ result: result, insertedData: eventInstance });
      }
    } catch (error) {
      console.log("Erro ao Criar um novo evento!", error);
      return res.status(500).json({ msg: "Internal Server Error!", error: error });
    }
  },
};

export default eventoController;
