// função que calcula juros compostos 
function calcularJuros(pv, i, n){
    if(isNaN(pv,i,n))
    return "algum dos valores não pode ser calculado"
    else{
    let fv = Math.floor(pv * (1 + i / 100) ** n)
    fv+=pv
    fv.toFixed
    fv.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})
    return fv }

   
}
console.log(calcularJuros(1800,6,4))