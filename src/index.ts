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
const aa = new Pessoa("abner"); // recebe endereço de um obejeto tipo "Pessoa" exemplo e200
const bb = new Pessoa("Jessica");

console.log(aa.nome);
console.log(bb.nome);
console.log(Pessoa.cont);