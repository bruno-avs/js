import { promessa } from "./promise_then_then.mjs";
const promessa1 = new Promise ((resolve)=>{
 resolve("usuario encontrado")
})
const promessa2 = new Promise((resolve)=>{
   setTimeout(()=>{
       resolve("usuario encontrado")
   }, 3000)
    }
    )
// com a promise all todas as promises são executadas e retornadas em uma array 
// se a caso uma das promises atrasar, as outra duas vão ficar congeladas esperando-a, pra
// só depois ser executada juntas 
let pro = Promise.all([promessa("bruno"), promessa1, promessa2]).then((dados)=>{
    console.log(dados)
}).catch((oerr)=>{
    console.log("erro: " + oerr)
})
export{promessa1, promessa2}