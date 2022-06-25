import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    /*Duas formas de se criar um array com tipo X:
        1 - Array<Tipo>
        2 - Tipo[]
    */
    private negociacoes:Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
    /*
    //para que n seja possivel editar a lista de negociacoes ou vc cria uma nova lista com o spred operator e retorna ela ou vc ativa a propriedade do read only
    //OPC 01: readonly
        O readonly também tem duas formas de se criar:
        1 - ReadonlyArray<Tipo>
        2 - readonly Tipo[] 
    */
    public lista(): readonly Negociacao[] {
        return this.negociacoes;   
    }
    /*
    OPC 02: spread operator
    lista(): Array<Negociacao>{
        return [...this.negociacoes];   
    }
    */
}