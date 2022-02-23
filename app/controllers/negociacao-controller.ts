import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    private inputData: HTMLInputElement; // o tipo é o mesmo definido no input do HTML
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona() {
        // Como os valores recebidos do form vêem como String:        
        const data = new Date(this.inputData.value.replace('-', ',')); // conversão de data        
        const quantidade = parseInt(this.inputQuantidade.value); // conversão de quantidade
        const valor = parseFloat(this.inputValor.value); // conversao de valor

        const negociacao = new Negociacao(data, quantidade, valor);

        console.log(negociacao);
    }

} 
