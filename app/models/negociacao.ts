export class Negociacao {

    /* Se o construtor da Classe receber parâmetros com modificadores privados ou públicos,
    isso indica ao TS que esses são propriedades/atributos daquela Classe, recebendo os mesmos nomes 
    passados no construtor.
    As propriedades que não são recebidas no constutor, podem ser declaradas fora dele */

    constructor(
        public readonly data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volumeNegociacao(): number {
        return this.quantidade * this.valor;
    }

}
