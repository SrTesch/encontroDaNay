export class Evento{
    public dataHora?: Date;
    public local?: Location;
    public preço?: number;
    public nome?: string;

    constructor(nome : string, preço: number, dataHora: Date, local: Location){
        this.dataHora = dataHora;
        this.local = local;
        this.preço = preço;
        this.nome = nome;
    }
}