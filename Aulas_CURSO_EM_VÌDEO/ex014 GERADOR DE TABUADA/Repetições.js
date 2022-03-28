var b = document.getElementById('gerar')
b.addEventListener('click', gerar)
var reseta = document.getElementById('resetar')
reseta.addEvenetListener('reset', resetarf)



function gerar(){
    let inputtxt = document.getElementById('input-n')
    let tabela = document.getElementById('tab')
    
    if(inputtxt.value.length == 0){
        alert('Por favor digite um numero')
    }
    else{
        let n = Number(inputtxt.value)
        let s = 1
        tabela.innerHTML = ``
        while(s <= 10 ){
            let item = document.createElement('option') 
            item.text = `${n} x ${s} = ${n*s}`
            item.value = `tab${s}`
           
            tabela.appendChild(item)
            s++
        }
    }
}
function resetarf(){

    tabela.innerHTML = ``
}
