// uma função não presisa ter um nome para ser uma função, podendo ser anónima 
let square = function(x){return x * x};// calcula a raiz 
console.log(square(4));

// elassão covenientes para passar uma função como argumento para outra função 
function map(f,a){
 let result = [];
 for(let i = 0; i != a.length; i++)
    result[i] = f(a[i]); // resultado 0 recebe o valor dafunção f que vai caucular número por numero
return result;// os resultados das multiplicações de todos os números de a são retornados 
}

console.log(map(function(x){return x * x * x},[0,1,2,5,10]))//aqui a função f é declarada e passada para a outra função juntos com os valores a serem calculados 