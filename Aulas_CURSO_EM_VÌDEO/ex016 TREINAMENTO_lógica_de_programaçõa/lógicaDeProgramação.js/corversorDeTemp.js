//Convertor de fahrenheit par ceusius 
function converterTempDeTfParaTc(Tf=0){
    if(typeof Tf != "number")
     return "Não é um número"
    return (Tf - 32) / 9 * 5
}
 console.log(converterTempDeTfParaTc(104))