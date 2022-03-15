
function verificar() {
var data = new Date()   //dados do computador 
var ano = data.getFullYear() // selecionei o ano atual 

var res = document.querySelector('div#div-second')// div onde ficara o resultado

var Nano = document.getElementById('idadev') // select input ano de nacimento
var nacimento = Number.parseInt(Nano.value) // depois converta para Number 
if ( nacimento >= 1900 && nacimento < ano  ){
    var idade =   ano -  nacimento // calculando a idade 
    var sexo = document.getElementsByName('radsex')// selecionando os dois imputs tipo radio

    var genero = '' //deixe uma variavel vazia para adicionar o genero depois

    var img = document.createElement('img')// este comando aqui adiciona elementos HTML 

    img.setAttribute('id', 'foto') // já este daqui adiciona atributos a tags HTML 
    
    if(sexo[0].checked){//se o input masculino for selecionado executar...
        var umA = 'um'
       if(idade >= 0 && idade < 14 ){
           genero = 'criançã'
           img.setAttribute('src', 'imagens/menino-criança.png')
       }
       else if(idade < 18 ){
            genero = 'adolecente'
            img.setAttribute('src', 'imagens/menino-adolecente.png')
       }
       else if(idade < 30 ){
        genero = 'joven'
        img.setAttribute('src', 'imagens/homen-jovem.png')
       }
        else if(idade < 60 ){
            genero = 'homen'
            img.setAttribute('src', 'imagens/homen-6-idade.png')
        }
        else{
            genero = "senhor"
            img.setAttribute('src', 'imagens/homen-velho.png')
        }

    
       
    }
    else if(sexo[1].checked) {// se o input feminino for selecionado executar.....
        var umA = 'uma'
        if(idade >= 0 && idade < 14 ){
            genero = 'criançã'
            img.setAttribute('src', 'imagens/menine-criança.png')
        }
        else if(idade < 18 ){
             genero = 'adolecente'
             img.setAttribute('src', 'imagens/menina-adolecente.png')
        }
        else if(idade < 30 ){
         genero = 'joven'
         img.setAttribute('src', 'imagens/mulher-jovem.png')
        }
         else if(idade < 60 ){
             genero = 'mulher'
             img.setAttribute('src', 'imagens/mulher-6-idade.png')
         }
         else{
             genero = "senhora"
             img.setAttribute('src', 'imagens/mulher-velho.png')
         }
    }


res.innerHTML = `<strong>Detectamos ${umA} ${genero} de ${idade} anos.</strong> `
res.appendChild(img)// este comando adiciona objetos na HTML, o objeto esta dento da variavel img, este objeto foi adicionado anteriormente. 
img.style.textAlign = 'center'
}

else if(nacimento < 1900){
    window.alert('EITA!!! Você não acha que esta muito velho, por favor verifique os dados e tente novemente.  ')
}

else if (nacimento > ano ) {
    window.alert('OPS!!! Acho que você não naceu ainda, por favor verifique os dados e tente novamente.   ')
}
else if(nacimento == null){
    window.alert('A caixa de texto esta vazia, verifique os dados e tente novamente.')
}
else {
    window.alert('[ERRO] valor invalido.')
}




}