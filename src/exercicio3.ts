class Carro{
    private _marca: string = "";
    private _modelo: string = "";

    public set marca(_marca:string){
        this._marca = _marca;
    }

    public set modelo(_modelo :string){
        this._modelo = _modelo;
    }

    public get marca():string{
        return this._marca;
    }

    public get modelo():string {
        return this._modelo;
    }
}


const carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
console.log(carro);
export{}