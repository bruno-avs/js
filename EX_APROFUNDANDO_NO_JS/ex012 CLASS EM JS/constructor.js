const nome = "Bruno"
const sobrenome = "alves dos santos"

class person{
// quando o new é usado, o js cria por debaicho dos panos um objeto
    constructor(nome,sobrenome){ // o constructor permite criar as propriedades do objeto
        // o this referencia o objeto criado pela uso do new
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
//istanciando usando a palavra chave new 
const pessoa = new person(nome,sobrenome)

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
