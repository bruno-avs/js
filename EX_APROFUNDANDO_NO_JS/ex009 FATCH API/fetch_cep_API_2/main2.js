 const cep = document.querySelector("input#cep");
 const resu = document.querySelector("div#resu");

function criaUl(li) {
    let ul = document.createElement("ul");
    ul.id = "lista";
    ul.appendChild(li);
    resu.appendChild(ul)
}
function criarLista(campo, dados) {
    if (dados[campo].length === 0){}
    else {
        if(dados[campo] === true){dados[campo] = "dados do CEP não encontrados" }
        let li = document.createElement("li");
        li.id = campo;
        li.style.listStyle = "none";
        li.textContent = `${campo.toUpperCase()}: ${dados[campo]}`;

        criaUl(li)
    }
}
const callScript = (dados) => {
    for (const campo in dados) {
        criarLista(campo, dados)
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = dados[campo]
        }
    }
}
cep.addEventListener("blur", (e) => {
    resu.innerHTML = " "
    let pesquisa = cep.value.replace("-", "");

    const opitions = function (method, mode, cache) {
        this.method = method;
        this.mode = mode;
        this.cache = cache;
    }
    // Faz o request para a API de CEP 
    const seach = () => fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, new opitions('GET', 'cors', 'default'));
    // Converte de json para um object
    const tratarDados = resolve => resolve.json();
    // faz a chamda enviando os dados para a função callScript 
    const call = reponse => callScript(reponse);

    const erro = erro => console.log("aconteceu um erro: " + erro)
      
    seach()              //sempre que pucivel use as promisses desse modo
        .then(tratarDados)
        .then(call)
        .catch(erro)
})
