const {edFolha, edGalho} = require('./arraysBase') 
const listaLivros = require('./listaLivros')
const listaOrdenada = require('./listaOrdenada')
const livros = [
    {
        nome: "Javascript",
        preco:25
    },
    {
        nome: "PHP",
        preco:15
    },
    {
        nome:"Java",
        preco:30
    },
    {
        nome: "Elixir",
        preco:50
    },
    {
        nome: "Go",
        preco:45
    },
    {
        nome:"Python",
        preco:20
    }
]

const achaMaisBarato = (arrProdutos,posicao)=>{
    let menorValor = posicao;
    
    for(posicao; posicao < arrProdutos.length; posicao++){
        if(arrProdutos[posicao]["preco"]<arrProdutos[menorValor]["preco"]){
            menorValor = posicao
        }
    }
    
    // console.log(`o livro mais barato é ${arrProdutos[menorValor]["nome"]}, está na posição ${menorValor} e custa ${arrProdutos[menorValor]["preco"]}`)
    // return arrProdutos[menorValor]
    return menorValor
}
// achaMaisBarato(livros, 2)
// console.log(achaMaisBarato(livros,0))

//Selection Sort
const organizaLista = (arrProdutos) =>{
    

    for(let atual = 0;atual<arrProdutos.length;atual++){
        let menorValor = achaMaisBarato(arrProdutos,atual)
    
        let produtoAtual = arrProdutos[atual]
        let produtoMenorPreco= arrProdutos[menorValor]
        // console.log(livros[atual], livros[menorValor])

        arrProdutos[atual] = produtoMenorPreco
        arrProdutos[menorValor] = produtoAtual 
    }

    // console.log(arrProdutos)
    return arrProdutos
}
// organizaLista(livros)
// console.log(organizaLista(livros))

//Insertion Sort
const organizaListaInserindoElemento = (arrProdutos) =>{

    for(let atual = 0; atual< arrProdutos.length; atual++){
        let itemAnalisado = atual

        while(itemAnalisado >0 && arrProdutos[itemAnalisado].preco< arrProdutos[itemAnalisado-1].preco){
            let itemAtual = arrProdutos[itemAnalisado]
            let itemAnterior = arrProdutos[itemAnalisado-1]

            arrProdutos[itemAnalisado] = itemAnterior
            arrProdutos[itemAnalisado-1] = itemAtual

            itemAnalisado--
        }
    }
    console.log(arrProdutos)
}

// organizaListaInserindoElemento(livros)

const juntaListas = (lista1,lista2) =>{
    let listaFinal = []
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0
    let atual = 0
    
    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1]
        let produtoAtualLista2 = lista2[posicaoAtualLista2]
 
        if(produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1
            posicaoAtualLista1++
        }else {
            listaFinal[atual] = produtoAtualLista2
            posicaoAtualLista2++   
        }
        atual++
    }
    while(posicaoAtualLista1< lista1.length){
        listaFinal[atual] = lista1[posicaoAtualLista1]
        posicaoAtualLista1++
        atual++
    }
    while(posicaoAtualLista2< lista2.length){
        listaFinal[atual] = lista2[posicaoAtualLista2]
        posicaoAtualLista2++
        atual++
    }

     return listaFinal
}

// console.log(juntaListas(edGalho, edFolha))

//Merge Sort
const mergeSort = (arr)=>{
    if(arr.length>1){
        const meio = Math.floor(arr.length/2)
        const parte1 = mergeSort(arr.slice(0,meio))
        const parte2 = mergeSort(arr.slice(meio, arr.length))
        arr = ordena(parte1, parte2)
    }

    return arr
}

const ordena = (parte1, parte2)=>{
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while(posicaoAtualParte1< parte1.length && posicaoAtualParte2<parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        }else{
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }

    return resultado.concat(posicaoAtualParte1<parte1.length 
        ? parte1.slice(posicaoAtualParte1) 
        : parte2.slice(posicaoAtualParte2)
        )
}
// console.log(mergeSort(listaLivros))

const encontraMenores = (pivo, arr) =>{
    let menores = 0
    for(let atual =0; atual<arr.length;atual++){
        let produtoAtual = arr[atual]
        if(produtoAtual.preco<pivo.preco){
            menores ++
        }
    }
    trocaLugar(arr, arr.indexOf(pivo), menores)
    return arr
}

const trocaLugar = (arr,de,para) => {
    const elemento1 = arr[de]
    const elemento2 = arr[para]

    arr[de] = elemento2
    arr[para] = elemento1
}

// console.log(encontraMenores(listaLivros[2], listaLivros))
const divideNoPivo = (arr) => {
    let pivo = arr[Math.floor(arr.length/2)]
    encontraMenores(pivo,arr)
    let valoreMenores = 0
    for(let analisando = 0;analisando<arr.length;analisando++){
        let atual = arr[analisando]
        if(atual.preco <= pivo.preco && atual!== pivo){
            trocaLugar(arr,analisando,valoreMenores)
            valoreMenores++
        }
    }
    return arr
}
// console.log(divideNoPivo(listaLivros))

//Quick Sort
const quickSort = (arr, esquerda, direita) => {
    if(arr.length>1){
        let indiceAtual = particiona(arr,esquerda,direita)
        if(esquerda< indiceAtual-1){
            quickSort(arr,esquerda,indiceAtual-1)
        }
        if(indiceAtual<direita){
            quickSort(arr,indiceAtual,direita)
        }
    }
    return arr
}
const particiona = (arr,esquerda,direita) =>{
    let pivo = arr[Math.floor((esquerda+direita)/2)]
    let atualEsquerda = esquerda
    let atualDireita = direita

    while(atualEsquerda<= atualDireita){
        while(arr[atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }
        while(arr[atualDireita].preco > pivo.preco){
            atualDireita--
        }
        if(atualEsquerda <= atualDireita){
            trocaLugar(arr,atualEsquerda,atualDireita)
            atualEsquerda++
            atualDireita--
        }
    }
    return atualEsquerda
}

// console.log(quickSort(listaLivros, 0, listaLivros.length - 1 ))

const busca = (arr,de,ate, valorBuscado)=>{
    let indiceElemento
    const meio = Math.floor((de+ate)/2)
    const atual = arr[meio]
    if(de>ate){
        return -1
    }else if(ate<de){
        return -1
    }
    if(valorBuscado === atual.preco){
        return meio
    }
    if(valorBuscado<atual.preco){
        return busca(arr,de,meio - 1,valorBuscado)
    }
    if(valorBuscado>atual.preco){
        return busca(arr,meio + 1,ate,valorBuscado)
    }
    return indiceElemento
}
console.log(busca(listaOrdenada,0,listaOrdenada.length-1,41))