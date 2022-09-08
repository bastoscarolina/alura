const botaoOrdena = document.querySelector('#btnOrdenarPorPreco')

botaoOrdena.addEventListener('click',ordenaPorPreco)

function ordenaPorPreco(){
    const livrosOrdenados = livros.sort((a,b) => {return a.preco - b.preco})
    exibirLivros(livrosOrdenados)
}
