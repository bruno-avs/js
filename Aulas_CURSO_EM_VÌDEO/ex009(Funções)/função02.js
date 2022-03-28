//função que soma o valor de dois parametros.
function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2, 5))

//esta fução acima tem um poblema, se o valor de n1 ou n2 não tiver definido o retorno sera NaN.

//para resouver isso usamos um parametro pré definido, no caso m1=0.

function soma2(m1=0, m2=0){   // com isso toda ves que uma das duas variaveis estiver vazias
    return m1 + m2            // ela recebera o valor de 0 e não undefined.
}
console.log(soma2(2))