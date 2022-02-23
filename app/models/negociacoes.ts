import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adicionaNegociacao(novaNegociacao: Negociacao) {
        this.negociacoes.push(novaNegociacao);
    }

    listaNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }

}
