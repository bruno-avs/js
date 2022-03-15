//Esta primeira função cria um object quando é chamada 
function criarObject(){
    let object = {};
   return object;
}
console.log(criarObject())
//esta outra é uma evolução da primeira, ela recebe os parametros reais, nome e sobrenome e cria um object contendo estas informações 
function criarPessoa(nome,sobrenome){
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    return pessoa;
}
// com esta função é possivel criar pessoas de forma infinita 
let pessoaA = criarPessoa("bruno", "alves");
let pessoaB = criarPessoa("dany", "vanilde");
console.log(pessoaA, pessoaB)
// e acessar suas propriedades de forma separada 
console.log(pessoaA.nome, pessoaB.nome)

// esta outra fução abaixo faz o mesmo que a de cima só que ela possue uma outra função que concatena o nome e o sobrenome 
function fabricarPessoa(nome,sobrenome,idade){
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    pessoa.idade = idade;
     
    function nomeCompleto(){
        return `${nome} ${sobrenome}`
    }
    //È muito importante tornar a função publica expondo ela da maneira abaixo
    pessoa.nomeCompleto = nomeCompleto;// crie um novo atributo no object pessoa e adicione a função 
    return pessoa 
}
let pessoa01 = fabricarPessoa("Bruno", "alves", 19);
let pessoa02 = fabricarPessoa("dany", "vanilde", 4);
console.log(pessoa01);
console.log(pessoa02);
//para acessar as informações que a função concatenou é precisso chamar ela .....
console.log(pessoa01.nomeCompleto());

