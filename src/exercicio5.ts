class Carro {
  constructor(private _marca: string, private _modelo: string) {}

  get marca() {
    return this._marca;
  }

  get modelo() {
    return this._modelo;
  }
}
const carros: Carro[] = [];
carros.push(new Carro("VW", "Gol"));
carros.push(new Carro("Fiat", "Uno"));
carros.push(new Carro("GM", "Corsa"));
for (let i = 0; i < carros.length; i++) {
  console.log(carros[i].marca, carros[i].modelo);
}
export{}