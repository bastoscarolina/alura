import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const button = document.querySelector("#botao-importa");
if(button){
    button.addEventListener("click",()=>{
        controller.importaDados();
    })
} else{
    throw Error("Botão não encontrado")
}
