let pessoa = {};
// você conseque usar o this para referenciar o objeto que a contem 
pessoa.nome = "bruno";
pessoa.idade = 20;
pessoa.anirversario = function(){return `${this.idade += 1}   ${this.nome} `};// em vees de usar pessoa.idade se utiliza this.idade 


console.log(pessoa.nome);
console.log(pessoa.idade)
console.log(pessoa.anirversario());
console.log(pessoa.idade);

let pess = { 
    nome:"bruno",
    idade:19,
    a: (function(){ console.log(this.nome + this.idade)})
   
}
pess.a.call()
