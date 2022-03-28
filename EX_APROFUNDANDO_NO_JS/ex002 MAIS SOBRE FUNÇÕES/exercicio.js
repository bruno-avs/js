function criarPessoa(nome, sobrenome, anoNaci, sexo, númeroEs) {
    function formatDate(anoNaci) {
        let data = new Date(anoNaci);
        data_de_nacimento = data.toLocaleDateString('PT-BR', { timeZone: "UTC" });
        if(data_de_nacimento == "Invalid Date")
            return "data invalida"        
        return data_de_nacimento;
    }
    function calcularNumero(numero){    
        let operações = {}
        let parImp = x => {if(x % 2 ==0) return "Par";return "Impar";}// verifica se é par ou impar 
        let raizQuadrada = x => Math.sqrt(x);// calcula a raiz quadrada 
        let fatorial = function fatorial(x){ if(x == 0) return 1;return x * fatorial(x-1);}
        operações.parOUimpar = parImp(numero);
        operações.raizQuadrada = raizQuadrada(numero);
        operações.fatorial = fatorial(numero);
        return operações;
      }
      let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    pessoa.data_de_nacimento = formatDate(anoNaci);
    pessoa.sexo = sexo;
    pessoa.numero = {
        numero:númeroEs,
        raiz: calcularNumero(númeroEs).raizQuadrada,
        parOUimpar :calcularNumero(númeroEs).parOUimpar,
        fatorial: calcularNumero(númeroEs).fatorial
    }
    return pessoa;
    

}

let a = "2020-02-02"

 console.log(criarPessoa("bruno","alves","2002-03-09","masculino", 5).data_de_nacimento)
 console.log(criarPessoa("danyele","vanilde","09-3-2017","feminino", 6))