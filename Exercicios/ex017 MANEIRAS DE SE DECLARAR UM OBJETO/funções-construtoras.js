// A 3 forma de criar objetos é usando uma função construtora
function CreateMouses(cor = 'black', marca = 'sem marca'){
    this.cor = cor
    this.marca = marca
    this.status = true
    
}
CreateMouses.prototype.onOf = function(){ // com uma função construtora é possivel setar propriedades e métodos no prototype 
    if(this.status){
        console.log('Esta conectado.')
    }else{
        console.log('Desconectando....')
    }
    this.status = !this.status
}  

const mouse = new CreateMouses('white', 'corser')
console.log(mouse)
mouse.onOf()
mouse.onOf()