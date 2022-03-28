//primeiro exemplo de higher order function, que recebe uma função como argumeto
document.addEventListener("click",() =>{
    console.log("clicou no documento")
})
// outro exemplo de uma função que recebe outra função como argumento 
function double (num,funcTriple,funcQuadruple){
   const double = num * 2;
   const triple = funcTriple(double);
   const quadruple = funcQuadruple(triple);
   return quadruple
}
console.log(double(2, function(num){return num * 3},function(num){return num *4}))

//função que retorna outra função 
function porcentagem(quantidade=0){
    return function(valorResutante=0){
        return Math.floor(valorResutante / quantidade * 100)+ "%";
    }
}
const Cubicos = porcentagem(30);

console.log(Cubicos())
// mesma função só que refatorada
const porcent = (quantidade = 0)=> (valorResutante=0) => Math.floor(valorResutante / quantidade * 100) + "%";

const torrasSerradas = porcent(22);
console.log(torrasSerradas(10))