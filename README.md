<h1>Documentação do back</h1>
Aqui eu vou deixar separado as possíveis urls !!

## Participantes
<p><bolder>/participantes</bolder> vai ser a url que será usada para gerenciar e usar coisas relacionadas aos participantes</p>

<h3>/novo</h3>

<details>
<summary>Tipo da requisição: POST</summary>
  
<p>A combinação da url fica: "{urlpadrao}/participantes/novo"</p>
<p>Nesta url, você consegue inserir um novo participante no banco! <br>
Será necessario enviar os dados no corpo da requisição!</p>
Algo assim:

```javascript
  {
    cpf: "11111111111",
    nome: "example",
    tel: "021111111111",
    prof: "Desenvolvedor"
  } 
```

Neste exemplo, teríamos o seguinte resultado como resposta caso o resultado seja **200**:

```typescript
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
<br>
Todos os atributos são do tipo string
<br> <br>
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