// exemplo de uma funçõa aninhada 
function addSquare(x, y){
// os parametros, argumentos e variaveis podem ser acessados pela função filha, mas as informações dentro da função finha não podem ser acessada pela funçõa pai, a menos que de ultilize um declaração return.
    function raiz(x){
    return x * x ;
    }
    return raiz(x) + raiz(y);// chama a função duas vezes para calcular os dois valores 
}
console.log(addSquare(2,3))
// assim que uma função interna forma uma closure, é possivel adicionar parametros para as duas funções em uma unica declaração só
function fora(m){
    function dentro(n){
        return m + n;
    }
    return dentro;
}

console.log(fora(3)(4));// 3 ira para externa e 4 para interna