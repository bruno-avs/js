// usando o método call eu sonsico reaproveitar o código 
// o método faz a troca da propriedade this pelo parametro passado nele.
function livros(){
    return `O nome do livro é ${this.nome} e ele tem ${this.page} paginas.`
}

let book1 = {
    nome: "Magico de oz",
    page: 100
};
let book2 = {
    nome: "branca de neve",
    page: 150
};

 let info = livros.call(book1);
 let info2 = livros.call(book2);
 
 console.log(info);
 console.log(info2);
 //outros exemplos 
 function livros2(){
    return `O nome do livro é ${this[1]} e ele tem ${this} paginas o fa é ${this}.`
}
console.log(livros2);//se não definir nada e só chamar 
console.log(livros2.call(["100", "bruno"]))
console.log(livros2.apply(["100", "bruno"]))
