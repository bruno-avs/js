//mais de um argumento de uma vez
const add = num1 => num2 => num1 * num2 

console.log(add(2)(3)) 
//um de cada vez
const currying = desconto => preçõ => preçõ * desconto + " R$";

const valor = currying(.10);

console.log(valor(500), valor(400))