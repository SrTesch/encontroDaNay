export class Patrocinador{
    public cpfj : string;
    public nome?: string;
    public email?: string;
    public tipoEmp?: string;
    public status: "Aguardando Confirmação";

    constructor(cpfj: string, nome: string, email:string, tipoEmp: string){
        this.cpfj = cpfj;
        this.nome = nome;
        this.email = email;
        this.tipoEmp = tipoEmp;
    }
}