// forma que eu fiz 
function multiplos(limite){
    let m3 = 0
    let m5 = 0
    for(let l = 3; l < limite; l += 3)
    m3 += l
    for(let o = 5; o <= limite; o += 5)
    m5 += o
    console.log(m3 + m5)        
}
multiplos(10)
// forma que erra pra ser feita 
function multiplos35(maximo){
    let m3 = 0 
    let m5 = 0 
    for(i = 0; i <= maximo; i++){
        if(i % 3 ===0)
        m3 += i
        if(i % 5 == 0)
        m5 += i        
    }
    console.log(m3 + m5)
}
multiplos35(10)