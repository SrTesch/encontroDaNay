Aqui eu vou deixar separado as possíveis urls !!

<h1>/participantes</h1>
<p>vai ser a url que será usada para gerenciar e usar coisas relacionadas aos participantes</p>

<bolder>/novo</bolder>
<p>Nesta url, você consegue inserir um novo participante no banco! <br>
será necessario enviar os dados no corpo da requisição!</p>
<p>Algo assim: {cpf: "11111111111", nome: "example", tel: "021111111111", prof: "Desenvolvedor"} <br>
Todos os atributos são do tipo string </p>

<bolder>/deletar</bolder>
<p>Nesta url, você consegue deletar um participante do banco! <br>
Será necessário enviar apenas o cpf no body</p>
<p>Ex.: {cpf: "12345678912"} </p>