import { promessa } from "./promise_then_then.mjs";
promessa("dany").then((dados)=>{
   console.log(dados)
}).catch((dados)=>{    // é recomendado sempre usar o cath depois de then, pois nunca se sabe 
    console.log(dados) // exatamente quando um código pode dar um erro, o catch permite lidar 
                      // melhor com os erros 
})