import { pessoas } from "./dados_teste.mjs"// importo os dados do módulo dados 
const promessa = (nome) => {
    return new Promise((resolve, reject)=>{
         if(pessoas[0].nome === nome ){ // crio uma if para verificar o nome e retornar os dados
             resolve(pessoas[0])
         }
         else if(pessoas[1].nome === nome){
             resolve(pessoas[1])
         }
         else{
             reject("usuario não foi encontrado")
         }
    })
}
promessa("bruno").then((dados)=>{// passo o nome da pessoa que querro pegar os dados 
    return dados // para acessar o valor de uma then antecessora é presiso retornala
}).then((pessoa)=>{                                
console.log(pessoa.nome)
console.log(pessoa.sobrenome)                       // encadeamento de then, posso usar then 
console.log(pessoa.idade + " anos")                 // atras de then 
console.log(pessoa.sexo)
console.log(pessoa.nome_Sobrenome)
console.log("Nacido em: " + pessoa.ano_de_nacimento)
return pessoa.nome_Sobrenome
}).then((nome)=>{ 
    let n = nome.toUpperCase()
    console.log(n)
    
}).catch((erro)=>{// o método catch é usado para, para cuidar melhor de resultados de não sucesso ou de erros no programa 
// ele só é invocado quando a função reject na promise é invocada ou quando um código dentro de algum then lança um erro
    console.log("parece que deu um erro:" + erro)
})

export{promessa}