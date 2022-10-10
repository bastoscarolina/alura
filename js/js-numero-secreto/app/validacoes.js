const numeroCapturado = document.querySelector('.box')
const chute = document.querySelector('#chute')

function verificaSeValorEhValido(valor){
    const teste = +valor
    if(!Number.isNaN(teste) && teste >= menorValor && teste<= maiorValor){
        numeroCapturado.innerHTML = teste
    } else {
        console.log(valor)
        alert("valor invalido")
    }

    if(teste === numeroSecreto){
        chute.classList.add('sucesso')
        chute.innerHTML = `<p>Você acertou!</p>
            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>`
    } else if(teste < numeroSecreto){
        chute.innerHTML =  '<p>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></p>'
    } else{
        chute.innerHTML = '<p>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></p>'
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogarNovamente'){
        chute.classList.remove('sucesso')
        window.location.reload()
    }
})
