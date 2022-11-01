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

organizaListaInserindoElemento(livros)