<h1>Documentação da API</h1>

## Participantes
<p><bolder>/participantes</bolder> vai ser a url que será usada para gerenciar e usar coisas relacionadas aos participantes</p>

<h3>/pegarTudo</h3>
<details>
<summary>Tipo da requisição: GET</summary>
<p>URL completa = "{urlpadrao}/participantes/pegarTudo</p>
<p>Retorna todos os participantes cadastrados na plataforma.</p>
Exemplos de resposta caso o resultado seja:
<details>
<summary>200</summary>

```json
{

  {
    "cpf": "11111111111",
    "nome": "example",
    "tel": "021111111111",
    "profissao": "Desenvolvedor FrontEnd"
  },
  {
    "cpf": "1111111122",
    "nome": "example2",
    "tel": "021922222222",
    "profissao": "Desenvolvedor BackEnd"
  },
  {
    "cpf": "11111111133",
    "nome": "example3",
    "tel": "021987654321",
    "profissao": "Desenvolvedor FullStack"
  } 
}
```

</details>
<details>
<summary>400</summary>

```json
{
  "msg" : "Não há nenhum participante cadastrado"
}
```

</details>

<details>
<summary>500</summary>

```json
{
  "msg" : "Erro ao pegar dados dos Participantes"
}
```

</details>
</details>
<h3>/novo</h3>

<details>
<summary>Tipo da requisição: POST</summary>
  
<p>A combinação da url fica: "{urlpadrao}/participantes/novo"</p>
<p>Nesta url, você consegue inserir um novo participante no banco! <br>
Será necessario enviar os dados no corpo da requisição!</p>
Sendo eles: cpf, nome, tel e profissao. Todos eles do tipo string.

```json
  {
    "cpf": "11111111111",
    "nome": "example",
    "tel": "021111111111",
    "profissao": "Desenvolvedor"
  } 
```

Neste exemplo, teríamos o seguinte resultado como resposta caso o resultado seja:
<details>
<summary>200</summary>

```json
{
  "result": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  },
  "insertedData": {
    "cpf": "11111111111",
    "nome": "example",
    "telefone": "021111111111",
    "profissao": "Desenvolvedor",
    "status": "Aguardando Confirmacao"
  }
}
```
Vale ressaltar que o _status_ vai com o valor "Aguardando Confirmação" de padrão
</details>
<details>
<summary>500</summary>

```
error: Internal Server Error
```

</details>
</details>

<h3>/confirmar</h3>
<details>
<summary>Tipo da requisição: POST</summary>
<p>É aqui que você vai poder alterar o status / situação de algum participante (para fins de confirmação de pagamento)</p>
<p>URL completa = "{urlpadrao}/participantes/confirmar <br>
Será necessário enviar o cpf e o status desejado no corpo da requisição! Os dois do tipo string.
</p>

Exemplo:

```json
{
  "cpf": "11111111111",
  "status" : "Confirmado"
}
```

Exemplos de resposta caso o resultado seja:
<details>
  <summary>200</summary>
  
  ```json
  {
    "msg": "Status do Participante alterado para Confirmado com sucesso!"
  }
  ```
</details>

<details>
  <summary>500</summary>
  
  ```json
  {
    "msg": "Erro ao mudar o status do Usuário com cpf '11111111111' "
  }
  ```
</details>
</details>
<h3>/deletar</h3>
<details>
<summary>Tipo da requisição: DELETE</summary> 
<p>Nesta url, você consegue deletar um participante do banco! <br>
Será necessário enviar apenas o cpf no body</p>
Ex.:

```javascript
{
  cpf: "12345678912"
}
```
</details>


## Evento