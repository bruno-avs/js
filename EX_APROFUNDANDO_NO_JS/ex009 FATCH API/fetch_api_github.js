// fazendo uma request usando a api do github 
const nome = 'matheusbattisti';
fetch(`https://api.github.com/users/${nome}`,{// url da api do github 
    method:'GET',
    headers:{
       Accept:'application/vnd.github.v3+json',
    },
}).then((response)=> {return response.json()})
.then((dados)=>{
console.log(dados)
})
.catch((erro)=>{
    console.log(`erro: ${erro}`)
})
