/*se o valor do parametro real for divisivel:
por 3 retorna fiss 
por 5 retorna Buss
por 5 e por 3 retorna fissBuss
se não for um numero retorna "não é um numero"
e se o valor não for divisivel por 3 e nem por 5 retorna o valor inicial 
*/
function fissBuss(va){
    if(typeof va != 'number')// este não é um numero?
      return 'Não é um numero'
    else if(va % 3 === 0  && va % 5 === 0) 
      return 'fissBuss'
    else if(va % 5 === 0) return 'Buss'
    
    return va % 3 === 0? 'fiss': va
}
console.log(fissBuss(13))
