// a função A recebe 2, o valor de 2 é enviado a B e de B é enviado para C e depois retorna fazendo as multiplicações 
function A(a){
 return B(a) * a;

    function B(b){
       return C(b) * b;

        function C(c){
          return c * c;
        }
    }
}
console.log(A(2))