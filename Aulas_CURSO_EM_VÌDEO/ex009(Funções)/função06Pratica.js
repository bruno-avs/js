function chip(n){
    if(n < 1 || isNaN (n)) return // se o valor de n for 0 ou não for um numero 
     return n < 2 ?"chip" : chip(n -1) + "-chip"// se o valor de n for 1 concatenar só um chip, se for maior repete a
}                                               // repete a ação até chegar a 1.

const recur = chip(4)
console.log(recur)

// Como funciona uma função recursiva?

 function fatorial(f){//3 - O valor de x veio para o parametro formal 

   if(f==1){   // 4 - f no momento não é iqual a um então ele sequira para o else 
       res = f // 6- f agora vale dois então ele sequira para else de novo 
               // 8- agora pela primeira vez o valor de f é 1, então res recebe 1, o comando else
               // não é executado
   
    }
   else{
       res = f * fatorial(f-1)// 5-aqui o f vale 3 e fatorial(f - 1) vale 2 como temos uma       
                              // chamada o valor de f-1 volta para o parametro formal no topo.

                        // 7-O prosseso é repetido de novo só que agora f vale 2 e f-1 vale 1, então o
                        // valor 1 é retornado de novo para o parametro formal.
    }                           
   return res   //    
 }

 x = 3 // 1-primeiro coloco o valor que querro calcular em uma variavel 

 y = fatorial(x) // 2-depois coloco a chamada dentro de uma variavel para que o valor que vai der retornado ja fique nela 
 console.log(y)