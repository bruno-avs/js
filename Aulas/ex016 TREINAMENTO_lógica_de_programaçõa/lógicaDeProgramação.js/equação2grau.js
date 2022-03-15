// função que calcula uma equação de 2 grau 
        function calcularEquação(a=0, b=0, c=0){
            let delta = b**2 -4 * a * c
            const x1 = (-b + Math.sqrt(delta)) / (2 * a) 
            const x2 = (-b - Math.sqrt(delta)) / (2 * a) 
            console.log(`O valor de x1 é ${x1}.`)
            console.log(`O valor de x2 é ${x2}.`)  
        }     
        calcularEquação(2,4,3)       


