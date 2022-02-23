export class Negociacao {
    /* Se o construtor da Classe receber parâmetros com modificadores privados ou públicos,
    isso indica ao TS que esses são propriedades/atributos daquela Classe, recebendo os mesmos nomes
    passados no construtor.
    As propriedades que não são recebidas no constutor, podem ser declaradas fora dele */
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volumeNegociacao() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        /* Cria uma cópia do valor de _data em uma nova referência.
        Assim, `data` é uma "cópia" do valor de _data*/
        return data; // retorna a "cópia" de _data sem afetar o valor guardado no modelo de Negociacao
    }
}
