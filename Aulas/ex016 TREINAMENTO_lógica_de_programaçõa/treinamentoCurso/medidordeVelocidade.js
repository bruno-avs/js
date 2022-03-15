//Forma que eu fis 
function medirVelocidade(v){
    if(v <= 70) return 'ok'
    
    else if(v < 130){
    var pontos = 0
    let valorM = 70 
 
    while(valorM < v){
        pontos+=1
        valorM+= 5      
    }
    return `Você recebel ${pontos} na carteira.`    
    }
    else  return `Você recebel mais de 12 pontos na carteira, ela foi suspensa.`
}
console.log(medirVelocidade(129))

//forma que deveria ser feita 
function medirVelocidadeMaxima(ve){
    const velocidadeMaxima = 70
    const kmPontos = 5

    if(ve <= velocidadeMaxima)
    console.log('ok')
    else{
        const pontos = Math.floor((ve - velocidadeMaxima) / kmPontos)   
        if(pontos < 12)
        console.log(`Voce recebel ${pontos} na carteira`)
        else
        console.log(`Voce recebel ${pontos} na carteira, ela foi suspensa`)
        
    }
}

medirVelocidadeMaxima(130)