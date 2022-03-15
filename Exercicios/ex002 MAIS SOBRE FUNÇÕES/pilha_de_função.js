function foo(x){
    if(x < 0)
      return;
     console.log("score: " + x);
      foo(x-1);
      console.log("the Score: " + x);

    
}
foo(3)
// exemplo pratico de escopo 
for(let n = 0; n < 5; n++){
    console.log("ola")
    {  let maior = 10 }// a variavel maior não pode ser acessada pois esta dentro de um bloco
}   
console.log(maior)