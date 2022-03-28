const verificar = document.getElementById("verificar")

verificar.addEventListener('click', () => {
    let $nacimento = document.getElementById('idadev');
    let $sexo = document.getElementsByName('radsex');
    let $resultado = document.getElementById('div-second');
    
    let agora = new Date();
    let ano = agora.getFullYear();

    let nacimento = Number($nacimento.value);

    const idade = ano - nacimento

    const minAge = 1900;
    let info;
 function criarImagem(genero, src){
        this.generos = genero;

        this.img = document.createElement("img");
        this.img.setAttribute("id", "foto");
        this.img.src = src;

        this.umAO;
        $sexo[0].checked && idade >= 14? this.umAO = "um" : this.umAO = "uma";
    }  
    if (nacimento >= minAge && nacimento < ano) {
        if ($sexo[0].checked) {//se o input masculino for selecionado executar...

            if (idade >= 0 && idade < 14) { 
                info = new criarImagem('criançã','../imagens/menino-criança.png')                
            }
            else if (idade < 18) {
                info = new criarImagem('adolecente','../imagens/menino-adolecente.png')
            }
            else if (idade < 30) {
                info = new criarImagem('joven','../imagens/homen-jovem.png')
            }
            else if (idade < 60) {
                info = new criarImagem('homen','../imagens/homen-6-idade.png')     
            }
            else {
                info = new criarImagem('senhor','../imagens/homen-velho.png')
            }
        }
        else if ($sexo[1].checked) {// se o input feminino for selecionado executar.....  
            if (idade >= 0 && idade < 14) { 
                info = new criarImagem('criançã','../imagens/menine-criança.png')         
            }
            else if (idade < 18) {
                info = new criarImagem('adolecente','../imagens/menina-adolecente.png')        
            }
            else if (idade < 30) {
                info = new criarImagem('joven','../imagens/mulher-jovem.png')
            }
            else if (idade < 60) {
                info = new criarImagem('mulher','../imagens/mulher-6-idade.png')     
            }
            else {
                info = new criarImagem('senhora','../imagens/mulher-velho.png')         
            }
        }
        $resultado.innerHTML = `<strong>Detectamos ${info.umAO} ${info.generos} de ${idade} anos.</strong> `
        $resultado.appendChild(info.img)// este comando adiciona objetos na HTML, o objeto esta dento da variavel img, este objeto foi adicionado anteriormente. 
    }
    else {   
         const alerta = ()=>{
        if($nacimento.value.length === 0){
           alert('A caixa de texto esta vazia, verifique os dados e tente novamente.')
       
        } 
        else if( nacimento < minAge ){
           alert('EITA!!! Você não acha que esta muito velho, por favor verifique os dados e tente novemente.  ')
        }
        else if( nacimento > ano){
           window.alert('OPS!!! Acho que você não naceu ainda, por favor verifique os dados e tente novamente.   ')
        }
        else{
           window.alert('[ERRO] valor invalido.')
        }
    }
    alerta()    
   }
   
})