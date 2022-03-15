const numbers = [4,7,10,3];
// retorna a soma de todos os valores do array 
const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);
const ex = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    return `
valor do accumulator: ${accumulator}
valor do item atual iterado: ${currentValue} 
valor do index do item atual interado: ${currentIndex} 
array: ${array}`
},0)
// 1 - o accumulator recebe o valor inicial que é 0
// 2 - o item recebe o primeiro valor do array 
// 3 - o accumulator ira quardar o retorno da função 
console.log(sum)
console.log(ex)
// se o valor inicial não for especificado o accumulator(acc) vai receber o valor do index 0 do array no caso 4
// e o item recebera o valor do index subsequente (index 1) no caso o 9
// e o index se ra 1 
// o resultado é o mesmo só o funcionamento que é diferente 
const sum2 = numbers.reduce((acc, cur) => acc + cur)
console.log(sum2)