/*function exibirAxteriscos(maximo){
    let a = ''
    for(let linha =1; linha <= maximo; linha++){
    a+='*'
    console.log(a) }
}

exibirAxteriscos(10)*/
//forma 2
function repeteAxterisco(m){
    for(let a = 1; a <= m; a++){
        let n = ''
        for(let b = a; b <= m ; b++){
        n+='*'
       } console.log(n)
        
    }
}

repeteAxterisco(10)