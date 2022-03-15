//metodos que retornão um array contendo todos os nomes(keys) das propriedades de um object
let persona = {
    nome: "bruno",
    sobrenome:"alves"
}
let preson2 = ["bruno","alves"]
for(let p in preson2){
    console.log(preson2[p])
}
console.log(Object.keys(preson2))
console.log(Object.getOwnPropertyNames(preson2))



let pessoa = {}
pessoa[1] = "nome"
pessoa["nome"] = 

console.log(pessoa)
