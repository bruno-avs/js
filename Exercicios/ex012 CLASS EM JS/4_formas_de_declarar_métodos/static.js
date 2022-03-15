// A quarta forma é usando um método statico 
// O método estatico não é invocado a partir dos objetos gerados pela class, que nem no get e set 
class pesson{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    static getClassName(){
        return this.name
    }
}
// Pra você invocar um método estatico é precisso primeiro invocar o nome da class e depois encadear a chamada do método 
// pois neste caso o this referencia o nome da class e não o objeto criado por ela 
// Por baixo dos panos é o mesmo que atribuir um método para class diretamente 
console.log(pesson.getClassName())

// usando static para organizar artigos por data 
class article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    static compare(primeiroArticle, segundoArticle){
        return primeiroArticle.date - segundoArticle.date
    }
}

const articles = [
    new article("HTML", new Date(2021,1,1)),
    new article("CSS", new Date(2021, 0, 1)),
    new article("Java Script", new Date(2021, 11, 1))
]

const sortAticles = [...articles].sort(article.compare)
console.log(articles[0])
console.log(sortAticles[0])