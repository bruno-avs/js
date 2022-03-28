// Calculando fatorial de forma RECURSIVA 
function fatorial(n){
    if(n == 1){    // se o valor de n for iqual a 1 
        return 1
    }
    else{
      return n * fatorial(n - 1) // ele paga o valor de n e faz vezes a chamada n - 1, no caso  
    }                            // n vale 5 e n - 1 = 4 então, 5 x 4 = 20, como a uma chamada 
}                                // dentro da function o valor de n - 1 ira voltar para o 
console.log(fatorial(5))         // parametro formal então a ação se repetira até que o valor de 
                                 //  n for iqual 1