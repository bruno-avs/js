import {calcularJurosSimples} from './jurosSimples.mjs'




console.log(calcular())
console.log(calcularJurosCompostos(1200, 5, 2))
let n = document.getElementById("a")
let juros = calcularJurosSimples(1200,5,2)
n.innerHTML = juros