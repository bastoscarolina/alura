export class Negociacao {
    //Quando vc coloca o modificador de acesso nos parametros do construtor, o ts impicitamente cria as variaveis na classe. Se houver alguma variavel q n esteja no construtor vc pode criar da forma convencional
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    /*
        Se vc n quiser declarar a variavel como privada e depois criar os getters, pode declarar como public readonly

        1 - constructor(
            private _data: Date,
            private _quantidade: number,
            private _valor: number
        ){}

        get data() : Date {
            return this._data;
        }

        get quantidade() : number {
            return this._quantidade;
        }

        get valor(): number {
            return this._valor;
        }

        2 -constructor(
            public readonly _data: Date,
            public readonly _quantidade: number,
            public readonly _valor: number
        ){}
    */
    //Programação defensiva: vc cria uma nota data igual a da negociacao mas com uma referencia diferente, ai mesmo q tentem mudar a data da negociacao por fora nao vao conseguir
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
