// 4 formas de se emplementar métodos em uma class 

// A primeira forma é do modo tardicional 
class pesson{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    getFistName(){// usando um método tradicional para pegar o primeiro nome 
        return this.nome;
    }
}

const pessoa = new pesson("bruno", "alves", 19);

console.log(pessoa.getFistName())
