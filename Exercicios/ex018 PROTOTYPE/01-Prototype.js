// Abra está aba no console do chome
//No js todo o objeto possui um link ( __proto___) que liga as propriedades e métodos do object.prototype acendente a ele 
const texte = {}
texte.toString()
// só é possivel acessar o método toString porque o objeto literal criado está linkado através do __proto__ ao objeto prototype dele e a outros protótipos. 
//EXEMPLOS:
const meuObjeto = {} //meuObjeto.__proto__ ==> object.prototype ==> null
// perceba que o prototype chain só vai até encontrar o null

const meuArray = [] //meuArray.__proto__ => array.prototype => object.prototype => null

//com fuções é a mesma coisa 
function myFunc(){

}
//myFunc.__proto__ => function.prototype => object.prototype => null

//Observa-se que todos tem o object.portotype, isso significa que todos são considerados propriedades de um objeto