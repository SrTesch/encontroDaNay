import { OkPacket } from "mysql";
import {pool } from "../config/database";
import { Participante } from "../models/participantes";

function isOkPacket(obj: any): obj is OkPacket {
    return obj && obj.constructor && obj.constructor.name === 'OkPacket';
}

const participantesServices = {
    pegarTudo : async () =>{
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query('select * from participantes;');
            conn.release();

            if(Array.isArray(result) && result.length != 0){
                const total = result.length;
                return {result, total}
            }
            else
                return ("Nada")
        }catch(error){
            console.log(error);
            throw new Error("Erro ao pegar dados dos Participantes");
        }
    },
    newParticipante : async (part: Participante) =>{
        console.log("Inserindo novo participante ao banco de dados...");
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query('insert into participantes values (?,?,?,?,?);',
            [part.cpf, part.nome, part.telefone, part.profissao, part.status]);
            conn.release();

            const insertedData: Participante = {...part}
            console.log(`${part.nome} inserida(o) com sucesso!!!`, insertedData);
            return {result, insertedData};
        }catch(error){
            console.log(error);
            throw new Error("Erro ao inserir novo participante ao banco")
        }
    },
    updateStatus : async (cpf: string, status: string) =>{
        try{
            const conn = await pool.getConnection();
            const [rows] = await conn.execute('update participantes set situacao = ? where cpf = ?', [status, cpf]);
            console.log(rows);
            if(isOkPacket(rows[0])){
                console.log("toma aqui as infos:",(rows[0] as OkPacket).info);
            }
            return rows;
           
        }catch(error){
            console.log(error);
            throw new Error(`Erro ao atualizar status do Usuário com cpf: ${cpf}\n`);
        }
    },
    deletar : async (cpf : string) =>{
        console.log("Deletando participante do banco de dados.");
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query('delete from participantes where cpf = ?;', [cpf]);
            conn.release();
            return {result}
        }catch(error){
            console.log(error);
            throw new Error("Erro ao deletar participante no banco");
        }
    },
    deletarTudo : async () =>{
        console.log("Deletando todos os participantes do banco...");
        try{
            const conn = await pool.getConnection();
            const result = await conn.query('delete from participantes;');
            conn.release();
            if (Array.isArray(result) && result.length > 0 && 'affectedRows' in result[0]) {
                const affectedRows = result[0].affectedRows || 0;
                console.log("Número de linhas afetadas:", affectedRows);
                return affectedRows
            }
        }catch(error){
            console.log(error);
            throw new Error("Erro ao deletar todos os participantes")
        }
    }
}

export default participantesServices;