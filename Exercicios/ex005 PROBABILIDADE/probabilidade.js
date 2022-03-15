let pontosAmostrais = [1,2,3,4,5];
let espaçoAmostral = 6
function calcular(pA, eA){
    let t = 0;
    let negativos = n =>{if(n < 0 ) return t += true}
    pA.forEach(negativos)
  if(pA.sort()[pA.length - 1] > eA || t != 0 ){
     console.log("[ERRO] valor invalido")
  }
  else{
      console.log("Resultador:")
      console.log("Fracional: " + pA.length + " | " + eA)
      console.log("Decimal: " + "0," + Math.floor(pA.length * 100 / eA))  
      console.log("Porcentagem: " + Math.floor(pA.length / eA * 100) + "%")    
  }
}

calcular(pontosAmostrais,espaçoAmostral)


