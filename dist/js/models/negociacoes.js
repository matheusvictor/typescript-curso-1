export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacao(novaNegociacao) {
        this.negociacoes.push(novaNegociacao);
    }
    listaNegociacoes() {
        return this.negociacoes;
    }
}
