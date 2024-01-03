import {pool } from "../config/database";
import { Participante } from "../models/participantes";
import { ResultSetHeader, RowDataPacket } from "mysql2";


interface NewResponse {
    result: ResultSetHeader;
    insertedData: Participante;
}

const participantesServices = {
    newParticipante : async (part: Participante) : Promise<NewResponse> =>{
        console.log("Inserindo novo participante ao banco de dados...");
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query<ResultSetHeader>('insert into participantes values (?,?,?,?,?);',
            [part.cpf, part.nome, part.telefone, part.profissao, part.status]);
            conn.release();

            const insertedData: Participante = {...part}
            console.log("inserted data:", insertedData);
            console.log("Usuario inserido com sucesso!!!", insertedData);
            return {result, insertedData};
        }catch(error){
            console.log(error);
            throw new Error("Erro ao inserir novo participante ao banco")
        }
    },
    deletar : async (part : Participante) : Promise  <NewResponse> =>{
        console.log("Deletando participante do banco de dados.");
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query<ResultSetHeader>('delete from participantes where cpf = ?;', [part.cpf]);
            conn.release();
            const insertedData : Participante = {...part}
            return {result, insertedData}
        }catch(error){
            console.log(error);
            throw new Error("Erro ao deletar participante no banco");
        }
    }
}

export default participantesServices;