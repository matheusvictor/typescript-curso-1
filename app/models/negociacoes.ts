import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adicionaNegociacao(novaNegociacao: Negociacao) {
        this.negociacoes.push(novaNegociacao);
    }

    listaNegociacoes(): Array<Negociacao> {
        return [...this.negociacoes];
        // retorna uma "cópia" da lista, preservando a original,
        // pois a ref da lista original em memória é diferente da ref. de sua cópia
    }

}
