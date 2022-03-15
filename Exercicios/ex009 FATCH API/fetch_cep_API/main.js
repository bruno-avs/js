const cep = document.querySelector("input#cep")
const showData = (dados)=>{
//para cada um dos campos que veio nesse objeto armazene o nome deles dentro da variavel campo e mostre no console depois 
   for(const campos in dados){
    if(document.querySelector("#"+ campos)){  
     //aqui ele celeciona o input pega o valor dele value e adiciona dados[campo]
    document.querySelector("#"+ campos).value = dados[campos] // como o valor de dados é um object a cada repetição da for in ele colocara os dados no input ex dados.rua
    }
   }
}

cep.addEventListener("blur", (e) => {
    let seach = cep.value.replace("-", "")// o replace vai perquisar os valores do input e retirar o traço se ele estiver lá              ("pesquisa","retira")

    const opitions = {// aqui eu crio as opições para o request 
        method: 'GET', // metódo vai ser o get significa que eu vou pegar dados 
        mode: 'cors', // modo vai ser cors significa que eu vou estar informando que o meu servidor é de origem diferente do site via cep
        cache: 'default'// cache padrão  
    }                                                                      
    fetch(`https://viacep.com.br/ws/${seach}/json/`, opitions)//faço o request usando o object opitions como segundo argumento 
        .then(response => {
            if(!response.ok) throw new Error("ouve algum erro" + response.status)
            response.json()
            .then((data) => showData(data))// agora envie data como parametro para a função showData
        })
        .catch(e => {
            console.error(e.message)  
        })
})