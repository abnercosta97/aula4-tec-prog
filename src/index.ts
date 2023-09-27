// static 
class Pessoa{
    nome: string = "Elisa";
    static cont: number = 0;

    constructor(nome:string){
        this.nome = nome;
        Pessoa.cont++;
    }
}

console.log(Pessoa.cont);
const a = new Pessoa("abner"); // recebe endereço de um obejeto tipo "Pessoa" exemplo e200
const b = new Pessoa("Jessica");

console.log(a.nome);
console.log(b.nome);
console.log(Pessoa.cont);