
const controle = document.querySelectorAll('[data-controle]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const cores = [
    'Amarelo',
    'Azul',
    'Branco',
    'Preto',
    'Rosa',
    'Vermelho'
]
const estatistica = document.querySelectorAll('[data-estatistica]')

controle.forEach( elemento => {
    elemento.addEventListener('click',(event)=>{
        manipulaDados(event.target.dataset.controle, event.target.parentNode)
        atualizaEstatisticas(event.target.dataset.pecas)
    })
})


function manipulaDados(operacao, alvo){
    const peca = alvo.querySelector('[data-contador]')

    if(operacao === '-'){
        if(parseInt(peca.value)>0){
            peca.value = parseInt(peca.value) - 1
        }   
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    estatistica.forEach( element =>{
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]
    })
}

const robotron = document.querySelector('.robo')

let i = 0;
robotron.addEventListener('click', ()=>{
    trocaImagem(cores[i])
    i++
    if(i>=cores.length){
        i=0
    }
})

function trocaImagem(cor){
    document.querySelector(".robo").src="./img/Robotron 2000 - " + cor + ".png";
}

