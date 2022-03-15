var preços = [100,200,111,300,500,999]

function  analizarMaiorpreço(preços){
   let preçoFormat = {}
 for(var n = 0; n < Object.keys(preços).length; n++){
    for(var m = n; m < Object.keys(preços).length; m++){
       if(preços[n] < preços[m]){
          let t = preços[n];
          preços[n] = preços[m];
          preços[m] = t;        
       }
    }   
 }
preçoFormat.maiorValor = preços[0];
preçoFormat.preços = preços;
return preçoFormat
}
let mpreços = analizarMaiorpreço(preços)
console.log(mpreços.maiorValor)

