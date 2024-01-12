import { pool } from "../config/database";
import { Evento } from "../models/evento";

const eventoServices = {
    getInfos: async () => {
        console.log("Pegando dados do evento...");
        try {
            const conn = await pool.getConnection();
            const result = await conn.query("select * from evento order by idEvent desc limit 1;");
            conn.release();

            console.log("Este é o resultado da query:", result);

            if (result.length > 0) {
                console.log("Dados do evento obtidos com sucesso!\n", result[0])
                return result;
            }
            
        } catch (error) {
            console.log("Erro ao pegar dados do evento:", error);
            return error;
        }
    },
    newEvent : async (event : Evento)=>{
        try{
            const conn = await pool.getConnection();
            const result = await conn.query("insert into eventos (nome, preco, local, data) VALUES (?,?,?,?)",
            [event.nome, event.preço, event.local, event.dataHora]);
            console.log("Resultado da query:", result);
            if(result.length > 0)
                return result;
        }catch(error){
            console.log('Erro ao criar novo evento');
            return error;
        }
    },
    updateEvent : async (event: Evento)=>{
        try{
            const conn = await pool.getConnection();
            // let eventoEncontrado = await conn.query("update eventos set ");
        }catch(error){
            console.log('Erro ao editar evento com id:', event.id);
            return error;
        }
    }
}

export default eventoServices;