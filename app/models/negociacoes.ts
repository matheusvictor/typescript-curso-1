import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adicionaNegociacao(novaNegociacao: Negociacao) {
        this.negociacoes.push(novaNegociacao);
    }

    listaNegociacoes(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

}
