// Setando usando uma fução construtora 
const pessoa = {
    falar(){
        return `${this.falou} ola`
    }
}
function Falou(termo){
   this.falou = termo
}
Falou.prototype = pessoa
const olaFalou = new Falou('eiii')
console.log(olaFalou)

// Setando usando o object.create()
const pessoa2 = {
    falar(){
        return `${this.falou} ola`
    }
}
let cadastro = {
    nome:'bruno',
    sobrenome: 'alves'

}

cadastro = Object.create(pessoa2)
console.log(cadastro.falar())
// Outra forma é usando o setPrototypeOf()
const pessoa3 = {
    falar(){
        return `${this.falou} ola`
    }
}
let cadastro2 = {
    nome:'bruno',
    sobrenome: 'alves'

}
Object.setPrototypeOf(cadastro2, pessoa3)
console.log(cadastro2.falar())