function calcularDados(numero1,numero2){ 
    
    let fator = {  
        numero01:'',
        numero02:''
    } 

   function fatorial1(numero1){
        if(numero1 == 1) return 1
        else return numero1 * fatorial1(numero1-1)               
    }
    function fatorial2(numero2){
        if(numero2 == 1) return 1
        else return numero2 * fatorial2(numero2-1)               
    }
    function multiplos35(numero1,numero2){
        if( typeof numero1 =='number' && typeof numero2 =='number' )
          console.log('calculando....')
        if(numero1 % 3 !== 0 && numero2 % 3 !==0)
        console.log('Os dois números não são divididos por 3') 
        if(numero1 % 5 !== 0 && numero2 % 5 !== 0) 
        console.log('Os dois números não são divididos por 5')

        if(numero1 % 3 == 0 && numero1 % 5 == 0)
        console.log('fissBuss') 
        else {if(numero1 % 3 ===0 ) console.log('fiss')
        if(numero1 % 5 ===0 ) console.log('Buss')}

        if(numero1 % 3 == 0 && numero1 % 5 == 0)
        console.log('fissBuss')
        if(numero2 % 3 ===0 ) console.log('fiss') 
        if(numero2 % 5 ===0 ) console.log('Buss')
       
        
      



    }
   fator.numero01 = fatorial1(numero1)
   fator.numero02 = fatorial2(numero2)  
   console.log(fator)
   multiplos35(numero1,numero2)
   
}
 
calcularDados(14,15)