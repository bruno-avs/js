let num = document.getElementById('input-n')
let tab = document.getElementById('tab')
let resu = document.getElementById('resu')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function isList(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
}
function parImp(p){
    if(p % 2 ==  0){
        return "par"
    }
    else{
     return "impar"
    }

}

function adicionar(){
    if(isNumero(num.value) && !isList(num.value, valores)){
     let Nu = Number(num.value)
     valores.push(Nu)
     


     let impPar = parImp(Nu)
     
     
     let indent = valores.indexOf(Number(num))

     let option = document.createElement('option')
     option.value = `tab ${indent}`
     option.text = `Número ${Nu} foi adicionado lista, e ele é ${impPar}.`
     tab.appendChild(option)
     

    }else if (num.value.length == 0){
        alert('A caixa de adição esta vazia, por favor digite um número.')
    }
    else{
      alert('Valor invalido ou já adicionado na lista.')
    }
    num.value = ''
    num.focus()
    resu.innerHTML = ``
}

function analizar(){
    if(valores.length == 0){
        alert('não a números cadastrados.')
    }
    else{
         // 1 4 5 6
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 

    
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior ){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot 

        resu.innerHTML = ``
        resu.innerHTML += `<p>Um total de ${tot} números cadastrador.</p>`
        resu.innerHTML += `<p>O maior valor é ${maior}.</p>`
        resu.innerHTML += `<p>O menor valor é ${menor}.</p>`
        resu.innerHTML += `<p>A sóma de todos o valores da o resultado de ${soma}.</p>`
        resu.innerHTML += `<p>Á média de resultados é ${media}.</p>`
        
      
    }
 
}



  

