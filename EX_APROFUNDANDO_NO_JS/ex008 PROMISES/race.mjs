import { promessa1, promessa2 } from "./all.mjs";
import { promessa } from "./promise_then_then.mjs";
// race é um método muito iqual a All, a unica diferenção é que ele executa a promise que der uma reposta mais rapida 
let promiseRace = Promise.race([promessa2, promessa1, promessa("bruno")]).then((dados)=>{
    console.log(dados)
}).catch((erro)=>{
    console.log("erro: " + erro)
})