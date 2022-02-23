import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form'); // pegando o form a partir da ref DOM da nossa página
// quando o evento de submit for acionado, será disparado o evento adiciona() do controller
form.addEventListener('submit', event => {
    event.preventDefault(); // impede comportamento de autorefresh durante o evento de submit
    controller.adiciona();
});
