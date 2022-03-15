function criarPessoa(nome, sobrenome, idade, sexo){
 let pessoa = {};
 pessoa.nome = nome;
 pessoa.sobrenome = sobrenome;
 pessoa.idade = idade;
 pessoa.sexo = sexo;
 function nomeSobrenome(nome, sobrenome){
     return nome + " " + sobrenome;    
 }
 pessoa.nome_Sobrenome = nomeSobrenome(nome, sobrenome);
 let anoNacimento = function(idade){ return 2021 - idade}
 pessoa.ano_de_nacimento = anoNacimento(idade)
 return pessoa;
}
let pessoas = []
pessoas[0] = criarPessoa("bruno", "alves", 19, "masculino")
pessoas[1] = criarPessoa("dany", "vanilde", 3, "feminino")

export{pessoas};