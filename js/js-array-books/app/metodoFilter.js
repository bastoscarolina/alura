const botoes = document.querySelectorAll('.btn')

const valorTotal = document.querySelector('#valor')

botoes.forEach(botao => {
    botao.addEventListener('click', ()=>{
        filtrarLivros(botao.value)
    })
})

function filtrarLivros(valor){
    const livrosFiltrados = livros.filter(livro =>{
        if(valor == 'disponivel'){
            return livro.quantidade>0
        } 
        return livro.categoria == `${valor}`;
    })
    valorTotal.innerHTML = calcularValorLivrosDisponiveis(livrosFiltrados)
    exibirLivros(livrosFiltrados)
}

// function filtrarLivros(){
//     const elementoClicado = document.getElementById(this.id)
//     const livrosFiltrados = elementoClicado.value == 'disponivel' ? livros.filter(livro => livro.categoria > 0) : livros.filter(livro =>{
//         return livro.categoria == elementoClicado.value
//     })
//     console.table(livrosFiltrados)
// }