const cep = document.querySelector('#cep')
cep.addEventListener('focusout', () => buscaCEP(cep.value))


async function buscaCEP(cep){
    let mensagemErro = document.querySelector('#erro')
    mensagemErro.innerHTML = ""

    try{
        const endereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const enderecoJSON = await endereco.json()
        if(enderecoJSON.erro){
            throw Error("Não foi possível encontrar o cep, favor verificar se o cep está correto.")
        }else{
            const logradouro = document.querySelector('#endereco')
            const cidade = document.querySelector('#cidade')
            const estado = document.querySelector('#estado')
            const bairro = document.querySelector('#bairro')

            logradouro.value = enderecoJSON.logradouro
            cidade.value = enderecoJSON.localidade
            estado.value = enderecoJSON.uf
            bairro.value = enderecoJSON.bairro

            return enderecoJSON
        }
    } catch(erro){
        mensagemErro.innerHTML = `<p> CEP inválido. Veifique se foi passado corretamente </p>`
    }
}

/*
function buscaCEP(cep){
    const dados = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(dados => dados.json())
    .then(dados => {
        if(dados.erro){
            throw Error("Não foi possível encontrar o cep, favor verificar se o cep está correto.")
        } else{        
            console.log(dados)}
        }
    )
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log("Processamento concluído"))
}
*/
/*
let ceps = ['40155000','01001000']
let conjuntoCeps = ceps.map(valores => buscaCEP(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
*/
// buscaCEP(40155000)