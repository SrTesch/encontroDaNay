import { pool } from "../config/database";
import { Evento } from "../models/evento";

const eventoServices = {
    getInfos : async () =>{
        console.log("Pegando dados do evento...")
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query("select * from evento;");
            conn.release();
            console.log("este é o resultado da query:", result);
            if(Array.isArray(result) && result.length != 0)
                return result
        }catch(error){
            console.log(`Erro ao pegar dados do evento`);
            throw new Error("erro ao pegar dados do evento");
        }
    }
}

export default eventoServices;