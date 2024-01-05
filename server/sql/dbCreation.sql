create database MulheresConectadas;

use MulheresConectadas;


create table participantes(
	cpf varchar(20) primary key,
    nome varchar(50) not null,
    tel varchar(15) not null,
    profissao varchar(30) not null,
    situacao varchar(50) not null
);

insert into participantes values ("11111111111", "Pedroca", "21982522690", "Dev FS", "Aguardando confirmação");

select * from participantes;

delete from participantes;

delete from participantes where cpf = "11111111111";

update participantes set situacao = "Confirmado" where cpf = "11111111111";