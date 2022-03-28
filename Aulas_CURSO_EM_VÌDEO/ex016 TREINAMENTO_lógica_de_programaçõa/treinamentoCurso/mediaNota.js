const notas = [70,70,80]

function calculaMedia(m){
    // é assim que se calcula a media 
    let soma = 0
    for(let n of m){
        soma += n // soma todos os valores
    }
    const media = soma/(m.length)// e depois dicie pela quantidade de notar no caso 3 70 70 80
    
    if(media < 59) return 'nota F'
    else if( media < 69) return 'nota D'
    else if( media < 79) return 'nota C'
    else if( media < 89) return 'nota B'
    else if( media <= 100) return 'nota A'
    
    
}
console.log(calculaMedia(notas))

