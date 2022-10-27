class NegociacoesView {

    constructor(elemento){
        this._elemento = elemento
    }
    _template(listaNegociacoes){
        return`
        <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                ${listaNegociacoes.negociacoes.map((n)=>{
                    return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    `
                }).join("")}
                </tbody>
                    <td colspan='3'></td>
                    <td>
                    ${listaNegociacoes.negociacoes.reduce((total,n)=> total + n.volume,0)}
                    </td>
                <tfoot>
                </tfoot>
            </table>
        `
    }

    update(listaNegociacoes){
        this._elemento.innerHTML = this._template(listaNegociacoes)
    }
}