class NegociacaoController {
    constructor(){
        // o bind é pra associar o document ao querySelector, ou seja, manter o contexto mesmo passando para uma variavel
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($('#negociacoes-view'))

        this._negociacoesView.update(this._listaNegociacoes)
    }
    adiciona(event){
        event.preventDefault()

        // let dataFormatada = DateHelper.dataParaTexto(data)

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._negociacoesView.update(this._listaNegociacoes)
        this._limpaFormulario()

        
        console.log(this._listaNegociacoes.negociacoes)
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario(){
        this._inputData.value =""
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus()
    }
}