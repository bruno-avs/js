//formas de se declarar classes

// 1 - tradicional 
class myClasse{
    //métodos
}
// 2 - atribuindo uma class com nome a uma variavel 
const myConst = class myClasse{
    //métodos
}
// 3 - atribuindo uma class sem o nome a uma variavel 
const myConst2 = class {
    //métodos
}
// 4 - criando uma função e retornando uma class 
function myFunc(){
    return class{}
}