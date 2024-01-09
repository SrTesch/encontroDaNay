create database encontroDaNay;
use encontroDaNay;


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

create table evento(
	idEvent int primary key auto_increment,
    nome varchar(100) not null,
    preco int not null,
    horario datetime not null,
    localizacao varchar(200) not null
);

insert into evento (nome, preco, horario, localizacao) VALUES("Teste2", 50, "2024-01-09 04:22:00", "Midori");

select * from evento order by idEvent desc limit 1;