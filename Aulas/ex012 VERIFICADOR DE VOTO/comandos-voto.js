
function verificar() {
    //selecionei e quardei tudo em uma variavel 
    var pnome = document.getElementById('dados-nome')
    var sobre = document.getElementById('dados-sobrenome')
    var naci = document.getElementById('dados-nacimento')
    var sexo = document.getElementsByName('radsex')
    var foto = document.getElementById('foto-resultado')
    var txtresu = document.getElementById('p-resultado')
    
    //converti os valores pra não dar dor de cabeçã 
    var nome = String(pnome.value)
    var sobrenome = String(sobre.value)
    var nacimento = Object(naci.value) // este aqui é novo, converte para objeto o input de nacimento

    //aqui separo o ano de nacimento
    var anoN = nacimento[0]
    anoN += nacimento[1]
    anoN += nacimento[2]
    anoN += nacimento[3]
    // aqui o mes
    var mesN = nacimento[5]
    mesN += nacimento[6]
    // aqui o dia
    var diaN = nacimento[8]
    diaN += nacimento[9]


    //dados coletados do meu sistema 
    var agora = new Date()
    var ano = agora.getFullYear()
    var mês = agora.getMonth()
    var dia = agora.getDay()
    var hora = agora.getHours()
   

    //calculando a idade 
    var idade = ano - anoN

    var eleição = '02 de outubro de 2022'

    var genero = ''
    var Hdia = ''
    
    if (sexo[0].checked) {
        if (hora >= 0 && hora < 13) {
            Hdia = 'Bom dia !'
            if (idade >= 18 && idade < 30) {
                genero = 'jovem'
    
                foto.src = 'imagens/homen-jovem.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, e esta dentro da idade de voto obrigatório, o primeiro turno da eleição começara em ${eleição}.`
                

            }
            else if (idade >= 0 && idade < 15) {
                genero = 'criançã'

                foto.src = 'imagens/menino-criança.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem idade pra votar ainda `
            }
            else if (idade < 16 && mesN <= 9) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, portanto, você não tem idade pra votar ainda, mas como a proxima eleição é só ano que vem e você completara 16 anos antes do primeiro turno começar podera votar assim que tiver feito 16 e estiver com seu titulo de eleitor. lenbrado !!! o voto é opcional para você.  
                   `
            }
            else if (idade < 16 && mesN >= 10) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você não tem idade pra votar ainda, e infelismente não tera idade pra votar ano que vem também. `
            }
            else if (idade < 18) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você já tem idade pra votar, só que o seu voto é opcional. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 46) {
                genero = 'homen'

                foto.src = 'imagens/homen-jovem.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 61) {
                genero = 'senhor'

                foto.src = 'imagens/homen-6-idade.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 70) {
                genero = 'senhor'

                foto.src = 'imagens/homen-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 125) {
                genero = 'senhor'

                foto.src = 'imagens/homen-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você não tem mais idade pra votar obrigatóriamente , portanto seu voto não é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if(nome == 0){
                window.alert('ops!!!Parece que você não ponhou seu nome.')
            }
            else if(sobrenome == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar seu sobrenome.')
            }
            else if(nome == 0 && sobrenome == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e sobrenome.')
            }
            else if(nome == 0 && nacimento == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e data de nacimento.')
            }
            else if(nacimento == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar sua data de nacimento.')
            }





        }
//boa tarde
        else if (hora < 18) {
            Hdia = 'Boa tarde !'
            if (idade >= 18 && idade < 30) {
                genero = 'jovem'

                foto.src = 'imagens/homen-jovem.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, e esta dentro da idade de voto obrigatório, o primeiro turno da eleição começara em ${eleição}.`


            }
            else if (idade >= 0 && idade < 15) {
                genero = 'criançã'

                foto.src = 'imagens/menino-criança.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem idade pra votar ainda `
            }
            else if (idade < 16 && mesN <= 9) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, portanto, você não tem idade pra votar ainda, mas como a proxima eleição é só ano que vem e você completara 16 anos antes do primeiro turno começar podera votar assim que tiver feito 16 e estiver com seu titulo de eleitor. lenbrado !!! o voto é opcional para você.  
                     `
            }
            else if (idade < 16 && mesN >= 10) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você não tem idade pra votar ainda, e infelismente não tera idade pra votar ano que vem também. `
            }
            else if (idade < 18) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você já tem idade pra votar, só que o seu voto é opcional. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 46) {
                genero = 'homen'

                foto.src = 'imagens/homen-jovem.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 61) {
                genero = 'senhor'

                foto.src = 'imagens/homen-6-idade.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 70) {
                genero = 'senhor'

                foto.src = 'imagens/homen-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 125) {
                genero = 'senhor'

                foto.src = 'imagens/homen-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você não tem mais idade pra votar obrigatóriamente , portanto seu voto não é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if(nome == 0){
                window.alert('ops!!!Parece que você não ponhou seu nome.')
            }
            else if(sobrenome == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar seu sobrenome.')
            }
            else if(nome == 0 && sobrenome == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e sobrenome.')
            }
            else if(nome == 0 && nacimento == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e data de nacimento.')
            }
            else if(nacimento == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar sua data de nacimento.')
            }


        }
//boa noite
        else if (hora <= 23) {
            Hdia = 'boa noite !'
            if (idade >= 18 && idade < 30) {
                genero = 'jovem'

                foto.src = 'imagens/homen-jovem.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, e esta dentro da idade de voto obrigatório, o primeiro turno da eleição começara em ${eleição}.`


            }
            else if (idade >= 0 && idade < 15) {
                genero = 'criançã'

                foto.src = 'imagens/menino-criança.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem idade pra votar ainda `
            }
            else if (idade < 16 && mesN <= 9) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, portanto, você não tem idade pra votar ainda, mas como a proxima eleição é só ano que vem e você completara 16 anos antes do primeiro turno começar podera votar assim que tiver feito 16 e estiver com seu titulo de eleitor. lenbrado !!! o voto é opcional para você.  
                         `
            }
            else if (idade < 16 && mesN >= 10) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você não tem idade pra votar ainda, e infelismente não tera idade pra votar ano que vem também. `
            }
            else if (idade < 18) {
                genero = 'adolecente'

                foto.src = 'imagens/menino-adolecente.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você já tem idade pra votar, só que o seu voto é opcional. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 46) {
                genero = 'homen'

                foto.src = 'imagens/homen-jovem.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 61) {
                genero = 'senhor'

                foto.src = 'imagens/homen-6-idade.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 70) {
                genero = 'senhor'

                foto.src = 'imagens/homen-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 125) {
                genero = 'senhor'

                foto.src = 'imagens/homen-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é um ${genero} de ${idade} anos, você não tem mais idade pra votar obrigatóriamente , portanto seu voto não é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if(nome == 0){
                window.alert('ops!!!Parece que você não ponhou seu nome.')
            }
            else if(sobrenome == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar seu sobrenome.')
            }
            else if(nome == 0 && sobrenome == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e sobrenome.')
            }
            else if(nome == 0 && nacimento == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e data de nacimento.')
            }
            else if(nacimento == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar sua data de nacimento.')
            }

        }
        
            
        
    }
    
//boa tarde
        else if (hora < 18) {
            Hdia = 'Boa tarde !'
            if (idade >= 18 && idade < 30) {
                genero = 'jovem'

                foto.src = 'imagens/mulher-jovem.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, e esta dentro da idade de voto obrigatório, o primeiro turno da eleição começara em ${eleição}.`


            }
            else if (idade >= 0 && idade < 15) {
                genero = 'criançã'

                foto.src = 'imagens/menine-criança.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem idade pra votar ainda `
            }
            else if (idade < 16 && mesN <= 9) {
                genero = 'adolecente'

                foto.src = 'imagens/menina-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, portanto, você não tem idade pra votar ainda, mas como a proxima eleição é só ano que vem e você completara 16 anos antes do primeiro turno começar podera votar assim que tiver feito 16 e estiver com seu titulo de eleitor. lenbrado !!! o voto é opcional para você.  
                     `
            }
            else if (idade < 16 && mesN >= 10) {
                genero = 'adolecente'

                foto.src = 'imagens/menina-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem idade pra votar ainda, e infelismente não tera idade pra votar ano que vem também. `
            }
            else if (idade < 18) {
                genero = 'adolecente'

                foto.src = 'imagens/menina-adolecente.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você já tem idade pra votar, só que o seu voto é opcional. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 46) {
                genero = 'mulher'

                foto.src = 'imagens/mulher-jovem.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 61) {
                genero = 'senhora'

                foto.src = 'imagens/mulher-6-idade.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 70) {
                genero = 'senhora'

                foto.src = 'imagens/mulher-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 125) {
                genero = 'senhora'

                foto.src = 'imagens/mulher-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem mais idade pra votar obrigatóriamente , portanto seu voto não é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if(nome == 0){
                window.alert('ops!!!Parece que você não ponhou seu nome.')
            }
            else if(sobrenome == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar seu sobrenome.')
            }
            else if(nome == 0 && sobrenome == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e sobrenome.')
            }
            else if(nome == 0 && nacimento == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e data de nacimento.')
            }
            else if(nacimento == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar sua data de nacimento.')
            }


        }
//boa noite
        else if (hora <= 23) {
            Hdia = 'boa noite !'
            if (idade >= 18 && idade < 30) {
                genero = 'jovem'

                foto.src = 'imagens/mulher-jovem.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, e esta dentro da idade de voto obrigatório, o primeiro turno da eleição começara em ${eleição}.`


            }
            else if (idade >= 0 && idade < 15) {
                genero = 'criançã'

                foto.src = 'imagens/menine-criança.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem idade pra votar ainda `
            }
            else if (idade < 16 && mesN <= 9) {
                genero = 'adolecente'

                foto.src = 'imagens/menina-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, portanto, você não tem idade pra votar ainda, mas como a proxima eleição é só ano que vem e você completara 16 anos antes do primeiro turno começar podera votar assim que tiver feito 16 e estiver com seu titulo de eleitor. lenbrado !!! o voto é opcional para você.  
                         `
            }
            else if (idade < 16 && mesN >= 10) {
                genero = 'adolecente'

                foto.src = 'imagens/menina-adolecente.png'
                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem idade pra votar ainda, e infelismente não tera idade pra votar ano que vem também. `
            }
            else if (idade < 18) {
                genero = 'adolecente'

                foto.src = 'imagens/menina-adolecente.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você já tem idade pra votar, só que o seu voto é opcional. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 46) {
                genero = 'mulher'

                foto.src = 'imagens/mulher-jovem.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 61) {
                genero = 'senhora'

                foto.src = 'imagens/mulher-6-idade.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 70) {
                genero = 'senhora'

                foto.src = 'imagens/mulher-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if (idade < 125) {
                genero = 'senhora'

                foto.src = 'imagens/mulher-velho.png'

                txtresu.innerHTML = `Ola ${nome}, ${Hdia} Detectamos que você é uma ${genero} de ${idade} anos, você não tem mais idade pra votar obrigatóriamente , portanto seu voto não é obrigatório. O primeiro turno das eleições começãm no dia ${eleição}. `
            }
            else if(nome == 0){
                window.alert('ops!!!Parece que você não ponhou seu nome.')
            }
            else if(sobrenome == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar seu sobrenome.')
            }
            else if(nome == 0 && sobrenome == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e sobrenome.')
            }
            else if(nome == 0 && nacimento == 0){
                window.alert('ops!!!Parece que você esqueceu de colocar o seu nome e data de nacimento.')
            }
            else if(nacimento == 0){
                window.alert('ops!!! Parece que voçê esqueceu de ponhar sua data de nacimento.')
            }

        }
        

    }
    


}





