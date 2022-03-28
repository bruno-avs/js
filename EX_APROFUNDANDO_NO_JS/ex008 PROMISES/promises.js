// criando uma promessa, na maioria das vezes não é presiso criar uma promise, pois ela ja vem de uma outa api ou um ou biblioteca de terceiros

const promessa = new Promise((resolve, reject) => { // toda a class promese contem dois arguments
    const nome = "bruno"                              // o resolve e o reject 
    if (nome === "bruno") {
        // o resolve é uma função enbutdas da API 
        // de promise, ele retorna quando o valor 
        // é resolvido (encontrado)                            
        resolve("nome encontrado com sucesso")       //para criar uma promise é presiso estanciar 
    }                                              //ela primeiro ponhado dentro de uma função ou
    else {                                          //dentro de uma variavel iqual esta no exemplo
        // O reject tambem é uma função enbutda da API
        // de promise, ela retorna quando o valor é rejeitado
        // (não-encontrado)                                     
        reject("O nome não foi emcontrado")
    }
})
promessa
.then((data) => {
    console.log(data)
})
// se vc alterar o nome que esta na variavel const nome, vera que ira dar um erro é esatamente assim que acontece quando uma informação é rejeitada reject pra contornar isso existe o método catch que vc vera no outro arquivo



