"user stritc"
class person{
    // let obj = {}
    constructor(nome, sobrenome ){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    set n(nome){
        return this.nome = nome
    }
    get nomecompleto() {
        return this.nome + " " + this.sobrenome;
    }
    
    fala(){
        console.log(`ola meu nome é ${this.nome}`)
    }
}

let pessoa = new person("bruno", "alves")
pessoa.fala()
pessoa.nome = "dddd"
console.log(pessoa.nome)
