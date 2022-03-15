// função que calcula o fatorial de um numero natural 
function fatorial(f){
    let fat = 1                 // na primeira vez que o codigo for executado o valor de fat vai 
    for(let c = f; c > 1; c--){ // ser 1, esse 1 vai ser multiplicado por c que tem o valor do 
        fat *= c                // parametro f , e a cada execução a varialve c perde uma unidade
    }
    return fat


}
console.log(fatorial(6))