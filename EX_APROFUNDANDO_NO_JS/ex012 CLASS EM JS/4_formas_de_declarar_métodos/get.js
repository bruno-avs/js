
//A segunda forma é usando  os métodos getters
// este método é usado quando se quer obter o valor de uma propriedade do objeto criado pela class 
class persona{
    constructor(nome,sobrenome,idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
 get firstNome(){// usa-se o shortHander get para delimitar que o método ira pegar uma propriedade e retornar ela 
     return this.nome;
 }
}
const pessoa2 = new persona("Dany", "Vanilde", 4);
// A diferença para o método tradicional sem o get é que este não presisa usar parenteses, pois o método torna-se meio que uma propriedade do objeto criado pela class 
console.log(pessoa2.firstNome)

// A terceira forma é usando os métodos setters
// usase este método quando se quer alterar o valor de uma propriedade do objeto da class 