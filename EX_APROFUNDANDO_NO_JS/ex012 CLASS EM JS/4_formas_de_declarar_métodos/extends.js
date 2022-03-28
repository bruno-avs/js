// A palavra chave extends fas com que a sub class erde proprieades e métodos da class pai
class person{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeSObrenome(){
        return this.nome + " " + this.sobrenome
    }
    comprimento(){
        return "Ola seja bem vindo " + this.nomeSObrenome;
    }

}
class minhafilha extends person{
    constructor(nome,sobrenome){
        super(nome,sobrenome)// a palavra chave super permite que o constructor da classe pai seja usado pela classe filha 
        
    }
}
const pessoa = new person("bruno", "alves dos santos")
const filha = new minhafilha("Sofhia", "alves")
console.log(pessoa.comprimento())
console.log(filha.comprimento())