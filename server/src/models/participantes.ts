export class  Participante {
    public cpf: string;
    public nome?: string;
    public telefone?: string;
    public profissao?: string;
    public status: string;

    constructor(cpf: string, nome:  string, telefone:string, profissao:string){
        this.cpf = cpf;
        this.nome= nome;
        this.telefone = telefone;
        this.profissao = profissao;
        this.status = "Aguardando Confirmacao";
    }
}