//import { NegotiationController } from './controllers/NegotiationController.js';

const controller = new NegotiationController();
const $ = document.querySelector.bind(document);

$('.form')
    .addEventListener('submit', controller.addNegociation.bind(controller));

$('#botao-apaga')
    .addEventListener('click', controller.delete.bind(controller));

$('#botao-importa')
    .addEventListener('click', controller.importNegotiations.bind(controller));