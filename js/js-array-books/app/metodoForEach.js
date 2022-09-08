const secaoLivros = document.querySelector('#livros')

function exibirLivros(livros){
    secaoLivros.innerHTML = ' '
    livros.forEach(livro => {
        let disponibilidade = checaDispolibilidade(livro)
        secaoLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>`
    });
}

function checaDispolibilidade(livro){
    if(livro.quantidade>0){
        return 'livro__imagens'
    }else{
        return 'livro__imagens indisponivel'
    }
}