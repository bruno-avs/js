
function load(){
    setInterval(carregar,1000)
}
 
APItempo()
const carregar = () =>{
var msn = window.document.getElementById('div-first')
let foto = window.document.querySelector('img#foto') 
const hors = ()=>{
    let agora = new Date()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()
    msn.innerHTML = `Agora são ${hora} horas ${minutos} minutos e ${segundos} segundos <br> `
    return hora
}
hors()
identificador(hors())
function identificador(){
    const manha = ()=>{ 
        foto.src = '../manha.png' 
        document.body.style.background = '#f4b673'
        }
        if(hors() >= 6 && hors() <= 12) manha();
        
        const tarde = ()=>{
            foto.src = '../tarde.png'
            document.body.style.background = '#8da6bf'
        }
        if(hors() > 12 && hors() < 18) tarde();
        
        const noite = ()=>{
            foto.src = '../noite.png'
            document.body.style.background = '#22273d'
        }
        if(hors() >= 18 && hors() <= 23 ) noite();
        
        const madrugada = ()=>{
            msn.innerHTML += ' !! puts não conseque dormir ? <a href="https://www.imsono.com.br/?gclid=CjwKCAjwqeWKBhBFEiwABo_XBs6Ju2S8dgtLxMT-7gljmnGdsH46nqkUabGH7lTf6DLff35ueSo4ExoCXhoQAvD_BwE"  rel="external" target= "_blank"> Click aqui </a>  '
            foto.src = '../madrugada.png'
            document.body.style.background ='#959b9a'
        }
        if(hors() >= 0 &&hors()  < 6) madrugada();
}


}