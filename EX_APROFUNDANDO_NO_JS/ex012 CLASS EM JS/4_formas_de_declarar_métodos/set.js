
class pessoa3 {
    constructor(nome,sobrenome,idade){
        this.nome = nome;
        this.sobrenome =  sobrenome;
        this.idade = idade;
    }
    set setarNovaIdade(NovaIdade){
        return this.idade = NovaIdade;
    }
}
const pessoa3_0 = new pessoa3("Clauan", "oliveira", 10)

console.log(pessoa3_0.idade)

pessoa3_0.setarNovaIdade = 11 // usando um operador de atribuição para setar uma nova idade 
// não presisa dos parenteses, pois ela funciona que nem o getters(como uma propriedade) 

console.log(pessoa3_0.idade)
// Evite mudar os valores das propriedades dos objetos !!!!!!!!!!!!!!!!!!!


