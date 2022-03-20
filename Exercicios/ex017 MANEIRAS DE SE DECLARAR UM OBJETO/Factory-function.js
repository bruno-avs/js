function createMouses(cor='black', marca='sem marca'){
    let status = true;
    return{
        cor,
        marca,
        status,
        onOf(){
            if(this.status){
                console.log('Esta conectado.')
            }else{
                console.log('Desconectando....')
            }
            this.status = !this.status
        }
    }
}

const mouse = createMouses('white', 'razer')
const mouse2 = createMouses('green', 'corser')
mouse.onOf()
console.log(mouse)
console.log(mouse2)