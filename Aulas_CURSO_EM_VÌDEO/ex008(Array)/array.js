let num = [2, 3, 5, 7, 8]// Variavel composta, array ou vetor

num.push(1)// Acrecenta o valor no final do array 

num[6] = 9 // acrecenta o valor na posição determinada pelo couchete, neste caso a 6

num.sort()// organiza os valore de forma decrecente

console.log(`O valor do array é ${num}`)//mostra o valor

// Como mostra mais de um valor na tela de modo simplificado
let n = [5,23,3,3,2,5,6]

for( let v = 0; v <= n.length; v++  ){
    console.log(`O valor é ${n[v]}`)
}
// outra maneira mais facil, é usar a estrutura for in, esta tambem é uma estrutura de repetição só que ela é otimizada especificamente para array e objects 

for(let p in n) //para cada valor dentro de n 
{console.log(`item ${p} de valor ${n[p]}`)}//executar este comando

// tambem existe uma maneira de buscar valores dentro de um array 

const s = n.indexOf(2)
console.log(s)//O valor mostrado é referente ao Key 