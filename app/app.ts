import{Negociacao} from './models/negociacao.js'; // importa o módulo Negociacao

const negociacao = new Negociacao(new Date()); // cria instância de Negociacao

console.log(negociacao.volumeNegociacao);
