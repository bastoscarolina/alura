import { Comparavel } from "../interfaces/comparavel.js";

export class Negociacao implements Comparavel<Negociacao> {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public jaExiste(negociacao:Negociacao): boolean {
        return this.data.getDate()  == negociacao.data.getDate()
            && this.data.getMonth()  == negociacao.data.getMonth()
            && this.data.getFullYear()  == negociacao.data.getFullYear()
    }
}