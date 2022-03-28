//Calcula o maior valor entre dois numeros 
function retornaNumero(n=0, m=0){
    if(n > m){
        return `O numero ${n} é maior`
    }
    else if(n == m){
        return `os numeros são iquais, ou não foram definidos`
    }

    return `O numero ${m} é maior`
    

    
}
   let n = retornaNumero(10, 11)
   console.log(n)