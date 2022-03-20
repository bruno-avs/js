//1 objeto literal
const mouse = {
    marca:'razer',
    cor:'preto',
    conectado: true,
    onOf(){
        if(mouse.conectado){
            console.log('Esta conectado.')
        }else{
            console.log('Desconectando....')
        }
        mouse.conectado = !mouse.conectado
    }
}

console.log(mouse)


