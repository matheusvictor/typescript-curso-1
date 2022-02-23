export class Negociacao {

    /* Se o construtor da Classe receber parâmetros com modificadores privados ou públicos,
    isso indica ao TS que esses são propriedades/atributos daquela Classe, recebendo os mesmos nomes 
    passados no construtor.
    As propriedades que não são recebidas no constutor, podem ser declaradas fora dele */
    
    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) { }

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volumeNegociacao(): number {
        return this._quantidade * this._valor;
    }

}
