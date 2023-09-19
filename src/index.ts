// static 
class Pessoa{
    nome: string = "Elisa";
    idade: number = 20;
}

const a = new Pessoa();
const b = new Pessoa();
a.nome = "Maria";
console.log(a);
console.log(b);