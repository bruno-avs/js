
function carregar(){
var msn = window.document.getElementById('div-first')
var foto = window.document.querySelector('img#foto') 
var agora = new Date()
var hora = agora.getHours()

//informações extras

var tempo = new Date()

var minutos = tempo.getMinutes()
var segundos = tempo.getSeconds()

msn.innerHTML = `Agora são ${hora} horas ${minutos} minutos e ${segundos} segundos <br> `

if(hora >= 6 && hora <= 12){
//bom dia 
msn.innerHTML += ' !! bom dia !!.'
foto.src = 'ex001/manha.png' 
document.body.style.background = '#f4b673'

}
else if(hora > 12 && hora < 18){
//boa tarde
msn.innerHTML += ' !! boa tarde !!'
foto.src = 'ex001/tarde.png'
document.body.style.background = '#8da6bf'

}
else if(hora >= 18 && hora <= 23 ){
    //boa noite 
msn.innerHTML += ' !! boa noite !! '
foto.src = 'ex001/noite.png'
document.body.style.background = '#22273d'}

else if ( hora >= 0 && hora < 6){
    msn.innerHTML += ' !! puts não conseque dormir ? <a href="https://www.imsono.com.br/?gclid=CjwKCAjwqeWKBhBFEiwABo_XBs6Ju2S8dgtLxMT-7gljmnGdsH46nqkUabGH7lTf6DLff35ueSo4ExoCXhoQAvD_BwE"  rel="external" target= "_blank"> Click aqui </a>  '
    foto.src = 'ex001/madrugada.png'
    document.body.style.background ='#959b9a'
}

}
var info = document.getElementById('date')
var mes = tempo.getMonth()

switch(mes){
case 0: info.innerHTML ='janeiro'
break
case 1: info.innerHTML = 'fevereiro'
case 9:info.innerHTML = 'fefee'
}
