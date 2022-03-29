// sintax do destructuring em array 
const [a, b] = [1,2,3];
//1 - pense que, todas as propriedades mencionadas no destructuring são como declarações de variaveis
//2 - uma variavel a sera declarada por debaicho dos panos recebendo o valor do primeiro elemento do array a direita
//3 - agora existem 2 const, a com o valor 1 e b com o valor 2
//4 - como foi dito anteriormente o valor no dertructuring é como uma declaraçao de variavel, então logicamente a sintax desse valor tem que sequir as regras de nomenclatura de varíavel.

console.log(a, b)// agora os valores de a e b não fazem mais parte o array,pois agora são variaveis diferentes.

// Atribiição separada da declaração 
const numbers = ['one', 'two', 'three']// a declaração do array tem que vir antes da declaração das variaveis c e d
let c, d;// tem que ser let ou var
[c, d] = numbers
console.log(c,d)
// Valores padrões
// È possivel estabelecer valores padrões para serem atribuidas no destructuring caso o valor seja um undefined
const numbers2 = ['one',undefined];
const [one = 0, two = 0] = numbers2;
// se um dos valore for undefined 0 sera adicionado a variavel
console.log(one, two)

//você pode ignorar valores usando uma vírgula
const valor = [1,2,3]
let v1, v2;
[v1,,v2] = valor
console.log(v1, v2)
// você tambem pode atribuir o resto de um array a uma variavel 
const array = [1,2,3,4];

const [valor1, ...valor2] = array;
console.log(valor1,valor2)// o primeiro valor do array esta armazenado no valor1 ja o resto dos valores do array estão armazenados, em formato de array, no valor2