const meuObj = {
    n:1,
    b:2
}
const novoObjeto = meuObj // colocou o obj dentro de uma variavel 
novoObjeto.b = 5
console.log(meuObj.b + novoObjeto.b)
//Na teoria era para o novoobjeto ser realmente um novo objeto, só que na pratica ao adicionar o valor 5 na propriedade b do novoObjeto estamos adicionando o mesmo valor na propriedade b do meuObj
//isso acontece porque o não estamos criando dois objetos diferentes e sim referenciando o objeto meuObj 
