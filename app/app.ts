import{Negociacao} from './models/negociacao.js'; // importa o módulo Negociacao

const negociacao = new Negociacao(new Date(), 10, 100); // cria instância de Negociacao

console.log(negociacao.volumeNegociacao);
