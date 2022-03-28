//Temos aqui o mesmo código do arquivo herança a diferença é que aqui usaremos o object.crate para contornar o poblema do anterior 
const meuObj = {
    n:1,
    b:2
}
const novoObjeto = Object.create(meuObj) 
novoObjeto.b = 5
console.log(meuObj.b + novoObjeto.b)
// Agora é como se eu copiace as propriedades e métodos do meuObj e passase para o novoObj, criando dois objetos com armazenamentos diferentes na memória 

// Este é um método usado para identificar se a propriedade pertence ao objeto ou se ela é herdada de um outro prototype
console.log(novoObjeto.hasOwnProperty('b'))