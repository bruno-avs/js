var contar = document.getElementById('input-button')
contar.addEventListener('click', começãr)

function começãr(){
var parti = document.getElementById('input-one')
var pass = document.getElementById('input-two') 
var chega = document.getElementById('input-three')
var resultado = document.getElementById('div-second')

var partida = Number(parti.value)
var passos = Number(pass.value)
var chegada = Number(chega.value)

// se todos os valores forem maiores que 0 
if(partida > 0 && chegada > 0 && passos > 0){
     
    resultado.innerHTML = `Começou &#x1F3C1;`
    for(var p = partida; p < chegada; p += passos){
        resultado.innerHTML += `${p} &#x1F449; `
    } 
    resultado.innerHTML += `&#x1F3C1;  chegou &#x1F3C6;`
    if(partida >  chegada){
        resultado.innerHTML = `Começou &#x1F3C6;`
        for(var p = partida; p > chegada; p -= passos)
        resultado.innerHTML += `${p} &#x1F449; `
    }
}
// se o valor de partida for 0 e os outros foram maiores que 0 
else if(partida == 0 && passos > 0 && chegada > 0 ){
    alert('Opis !!! Parece que você não definiu o inicil da contagem, então começaremos a partir de 1.')
    resultado.innerHTML = `Começou &#x1F3C1;`
    for(var p = 1; p < chegada; p += passos){
        resultado.innerHTML += `${p} &#x1F449; `
    } 
    resultado.innerHTML += `&#x1F3C1;  chegou &#x1F3C6;`
}
//se o valor de passos for 0 e os de partida e chegada forem maiores que 0 
else if(passos == 0 && partida > 0 && chegada > 0){
    resultado.innerHTML = `Começou &#x1F3C1;`
    for(var p = partida; p <= chegada; p += 1){
        resultado.innerHTML += `${p} &#x1F449; `
    } 
    resultado.innerHTML += `&#x1F3C1;  chegou &#x1F3C6;`
}
// se o valor de chegada for 0 e os valore de partida e passos forem maiores que 0 
else if(chegada == 0 && partida > 0 && passos > 0  ){
    alert('Opis !!! Parece que voçê não definiu o valor de chegada, então o valor sera 10.')
    resultado.innerHTML = `Começou &#x1F3C1;`
    for(var p = partida; p < 10; p += passos){
        resultado.innerHTML += `${p} &#x1F449; `
    } 
    resultado.innerHTML += `&#x1F3C1;  chegou &#x1F3C6;`
}
// se os valores de partida e chegada forem 0 e o valor de passos forem maiores que 0 
else if(partida == 0 && passos > 0 && chegada == 0){
    alert('Opis !!! Parece que voçê não definiu o valor de partida e de chegada, então os valores repectivamente seram 1 e 10.')

    resultado.innerHTML = `Começou &#x1F3C1;`

    for(var p = 1; p < 10; p += passos){
        resultado.innerHTML += `${p} &#x1F449; `
    } 
    resultado.innerHTML += `&#x1F3C1;  chegou &#x1F3C6;`
}
// se o valor de partida for maior que 0 e os valores de passos e chegada forem 0
else if(partida > 0 && passos == 0 && chegada == 0){
    alert('Opis !!! Parece que voçê não definiu o valor de passos e de chegada, então os valores repectivamente seram 1 e 10.')

    resultado.innerHTML = `Começou &#x1F3C1;`

    for(var p = partida; p < 10; p += 1){
        resultado.innerHTML += `${p} &#x1F449; `
    } 
    resultado.innerHTML += `&#x1F3C1;  chegou &#x1F3C6;`
}

else if(partida == 0 && passos == 0 && chegada > 0){
    alert('Opis !!! Parece que voçê não definiu o valor de partida e de passos, então os valores repectivamente seram 1 e 1.')

    resultado.innerHTML = `Começou &#x1F3C1;`

    for(var p = 1; p < chegada; p += 1){
        resultado.innerHTML += `${p} &#x1F449; `
    } 
    resultado.innerHTML += `&#x1F3C1;  chegou &#x1F3C6;`
}
else if(partida == 0 && passos == 0 && chegada == 0){
    alert('Opis !!! Parece que voçê não definiu nenhum valor, por favor define pelo menos um.')

}

}








