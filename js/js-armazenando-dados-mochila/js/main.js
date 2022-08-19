const form = document.querySelector('#novoItem')
const lista = document.querySelector('[data-lista]')
const itens =  JSON.parse(localStorage.getItem("itens")) ||[]

itens.forEach(item =>{
    const itemCriado = criaElemento(item)
    insereElemento(itemCriado)
})

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const nomeItem = event.target.elements['nome']
    const quantidadeItem = event.target.elements['quantidade']

    const itemAtual = {
        "nome": nomeItem.value,
        "quantidade" : quantidadeItem.value
    }

    const existe = itens.find(elemento => elemento.nome.toLowerCase() === nomeItem.value.toLowerCase())
    
    if(existe){
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)

        itens[existe.id] = itemAtual
    } else{
        
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length-1].id)+1 : 0
        

        const itemCriado = criaElemento(itemAtual)
        insereElemento(itemCriado)
        itens.push(itemAtual)
    }
    salvaItem()

    nomeItem.value = ""
    quantidadeItem.value = ""
})

function criaElemento(info){
    const item = document.createElement('li')
    item.classList.add('item')
    const quantidadeItem = document.createElement('strong')
    quantidadeItem.innerHTML = info.quantidade
    quantidadeItem.dataset.id = info.id
    item.appendChild(quantidadeItem)
    item.innerHTML += info.nome
    item.appendChild(criaBotaoDeleta(info.id))
    return item
}

function insereElemento(item){
    lista.appendChild(item)
}

function salvaItem(){
    localStorage.setItem('itens', JSON.stringify(itens))
}

function atualizaElemento(item){
   document.querySelector(`[data-id="${item.id}"]`).innerHTML= item.quantidade
}

function criaBotaoDeleta(id){
    const botao = document.createElement('button')
    botao.innerText = "X"
    botao.addEventListener('click', (event)=>{
        deletaElemento(event.target.parentNode, id)
    })

    return botao
}

function deletaElemento(element,id){
    element.remove()

    itens.splice(itens.findIndex(element => element.id === id),1)
    
    salvaItem()
}