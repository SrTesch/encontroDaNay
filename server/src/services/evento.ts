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
                return result[0];
            }
            
        } catch (error) {
            console.log("Erro ao pegar dados do evento:", error);
            return error;
        }
    },
    newEvent : async (event : Evento)=>{
        try{
            const conn = await pool.getConnection();
            const result = await conn.query("insert into evento (nome, preco, localizacao, horario) VALUES (?,?,?,?)",
            [event.nome, event.preço, event.local, event.dataHora]);
            conn.release();
            if(result.length > 0)
                return result;
        }catch(error){
            console.log('Erro ao criar novo evento');
            throw new Error(`${error}`);
        }
    },
    updateEvent : async (event: Evento)=>{
        try{
            const conn = await pool.getConnection();

            //Here I'm just adding a condition to change things or not, bc the user can sand just the things that he want to change
            let updateFields = ""
            if(event.nome)
                updateFields += `nome = ${event.nome}, `;
            if(event.dataHora)
                updateFields += `horario = ${event.dataHora}, `
            if(event.local)
                updateFields += `localizacao = ${event.local}, `
            if(event.preço)
                updateFields += `preco = ${event.preço}, `
            updateFields = updateFields.replace(/,\s*$/, '');

            let eventoEncontrado = await conn.query(`update evento set ${updateFields} where idEvent = ${event.id}`);
            conn.release();
            if(eventoEncontrado.length > 0)
                return eventoEncontrado
        }catch(error){
            console.log('Erro ao editar evento com id:', event.id);
            return error;
        }
    }
}

export default eventoServices;