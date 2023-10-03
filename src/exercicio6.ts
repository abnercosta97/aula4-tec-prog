class Carro {
    private static contador:number = 0;
    constructor(private _marca:string,private _modelo:string ){
        Carro.contador++;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    static getContador():number {
        return Carro.contador;
    }
}

const a = new Carro("VW","Gol");
const b = new Carro("Fiat","Uno");
const c = new Carro("GM","Corsa");
console.log("Quantidade:", Carro.getContador());