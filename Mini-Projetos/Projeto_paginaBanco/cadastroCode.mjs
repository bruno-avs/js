function continuar() {

    // todos os inputs 
    let dados = []
    dados[0] = document.getElementById("nome-cadas")
    dados[1] = document.getElementById("sobrenome-cadas")
    dados[2] = document.getElementById("cpf-cadas")
    dados[3] = document.getElementById("email-cadas")
    dados[4] = document.getElementById("numero-cadas")
    dados[5] = document.getElementById("dataNacimento-cadas")
    let termos = document.getElementById("termos")
    let divTermos = document.getElementById("termos-serviços")

    let span0 = document.getElementById('alerta00')
    let span1 = document.getElementById('alerta01')
    let span2 = document.getElementById('alerta02')
    let span3 = document.getElementById('alerta03')
    let span4 = document.getElementById('alerta04')
    let span5 = document.getElementById('alerta05')

    let span = [span0, span1, span2, span3, span4, span5]
    // esta função é uma versão minha de um desgn panttern factory 
    function criarConta(dados) {
        // seleciono o ano do sistema para calcular a idade
        const agora = new Date()// repare que o n de new é minusculo kkkkk
        const ano = agora.getFullYear()
        // seleciono os  dados do nacimento e converto para object
        let data = Object(dados[5].value)
        //seleciono so os ultimos numero que compoem o ano 
        let anoN = data[6] + data[7] + data[8] + data[9]// 01 34 6789 
        // aqui em baixo calculo a idade
        let idade = ano - anoN

        let conta = {
            nome: String(dados[0].value),
            sobrenome: String(dados[1].value),
            nomeSobrenome: String(`${dados[0].value}  ${dados[1].value}`),
            Cpf: Number(dados[2].value),
            email: String(dados[3].value),
            numero: Number(dados[4].value),
            idade: idade,
            dia: data[0] + data[1],
            mes: data[3] + data[4],
            ano: anoN,
            dataNacimento: data,
        }
        return conta
    }
    // selecionei o corpo do documet inteiro pra trocar depois 
    let main = document.getElementById('main')
    //aqui eu crio um array(vetor) que me possibilita armazenar varias contas em cada elemento do mesmo 
    let contas = []
    contas[0] = criarConta(dados)
   
  
    main.innerHTML = ''
    function criarElemento(estilo) {
        //imagen do like
        let img = document.createElement("img");
        img.setAttribute("id", "foto_certo");
        img.src = "imagens/2x/positivo.png";
        //links das paginas 
        let link1 = document.createElement("a");
        let link2 = document.createElement("a");
        link1.href = "pag02_cadastro.html"
        link2.href = "pag03_login.html"
        link1.rel = "prev"
        link2.rel = "next"
        link1.id = "link1"
        link2.id = "link2"
        // botões de voltar e continuar
        let buttom1 = document.createElement("button");
        let buttom2 = document.createElement("button");
        buttom1.id = "botão01";
        buttom2.id = "botão02";
        buttom1.textContent = "Voutar";
        buttom2.textContent = "Continuar";
        // div para fazer o uso de flex box 
        let div = document.createElement("div");
        div.id = "botõesVN";
        // estilo do main 
        main.innerHTML = " <h1> tudo certo </h1> ";
        main.style.minWidth = estilo[0];
        main.style.maxWidth = estilo[1];
        main.style.height = estilo[2];
        main.style.padding = estilo[3];
        main.style.backgroundImage = estilo[4];
        main.style.display = estilo[5];
        main.style.alignItems = estilo[6];
        main.style.justifyContent = estilo[7];
        main.style.flexDirection = estilo[8];
        main.style.color = estilo[9];
        main.style.font = estilo[10];
        main.style.textShadow = estilo[11];
        // botão voutar estilo 
        buttom1.style.backgroundImage = estilo[12];
        buttom1.style.color = estilo[9];
        buttom1.style.textShadow = estilo[11];
        buttom1.style.width = estilo[13];
        buttom1.style.height = estilo[14];
        buttom1.style.font = estilo[15];
        buttom1.style.border = estilo[16];
        buttom1.style.borderRadius = estilo[17];
        buttom1.style.boxShadow = estilo[18];
        // botão cadastra estilo
        buttom2.style.width = estilo[19];
        buttom2.style.height = estilo[14];
        buttom2.style.font = estilo[15];
        buttom2.style.borderRadius = estilo[17];
        buttom2.style.boxShadow = estilo[18];
        buttom2.style.border = estilo[16];
        // flex boxs
        div.style.marginTop = "30px"
        buttom1.style.marginRight = "100px"
        buttom1.style.cursor = "pointer"
        buttom2.style.cursor = "pointer"

       link1.appendChild(buttom1);
        link2.appendChild(buttom2);
        div.appendChild(link1);
        div.appendChild(link2);
        main.appendChild(img);
        main.appendChild(div);


    }
    let estilo = []
    estilo[0] = "250px"
    estilo[1] = "550px"
    estilo[2] = "250px"
    estilo[3] = "10px 20px"
    estilo[4] = "linear-gradient(90deg, #B500D6, #ED0CBA)"
    estilo[5] = "flex"
    estilo[6] = "center"
    estilo[7] = "center"
    estilo[8] = "column"
    estilo[9] = "white"
    estilo[10] = " 2em rubik"
    estilo[11] = "0px 0px 3px rgba(0, 0, 0, 0.472)"
    estilo[12] = "linear-gradient( to  right ,var(--color1), var(--color0),var(--color2))"
    estilo[13] = "110px"
    estilo[14] = "35px"
    estilo[15] = "18px rubik"
    estilo[16] = "none"
    estilo[17] = "5px"
    estilo[18] = "0px 0px 20px #13013d71"
    estilo[19] = "150px"

    criarElemento(estilo)
   
   retorno(contas)
 

}
function retorno(contas) {
    return contas
}
let contas = retorno();
console.log(contas.nome)
export {contas};
 