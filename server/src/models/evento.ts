export class Evento{
    public id?: number;
    public dataHora?: Date;
    public local?: string;
    public preço?: number;
    public nome?: string;

    constructor(id: number, nome : string, preço: number, dataHora: Date, local: string){
        this.dataHora = dataHora;
        this.local = local;
        this.preço = preço;
        this.nome = nome;
    }
}