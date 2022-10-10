const menorValor = 0;
const maiorValor = 100;

const numeroSecreto = gerarNumeroAleatorio();

console.log(numeroSecreto)
function gerarNumeroAleatorio(){
    return Math.floor(Math.random()* maiorValor) + 1
}
const elementoMenorValor = document.querySelector('#primeiroValor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#segundoValor')
elementoMaiorValor.innerHTML = maiorValor;