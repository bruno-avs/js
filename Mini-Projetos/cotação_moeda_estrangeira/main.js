import { requestCurrency } from './modulo/requests.js';

let $currencyInput = document.getElementById("input-currency");
const $select = document.getElementById("currency-cotação");
const $valorReal = document.getElementById("valorReal")
$valorReal.value = "0,00"

$currencyInput.addEventListener('input', () => {

  const $alert = document.getElementById("alert")


  const valorInputArray = $currencyInput.value.split("")
  const endValue = valorInputArray[valorInputArray.length - 1]


  function verificarUltimoValor(endValue) {
    const ValueTemp = Number(endValue)
    if (isNaN(ValueTemp) && endValue !== "," && endValue !== ".") return true

    else return false
  }

  function tratarDadosDoInput(currencyInputValue) {
    let replaceValue = ''

    for (let n = 0; n < valorInputArray.length; n++) {

      replaceValue += currencyInputValue[n].replace(",", ".")

    }

    return replaceValue
  }

  $alert.innerHTML = ''
  $valorReal.value = "0,00"
  if (!verificarUltimoValor(endValue)) {
    const currencyInputValue = $currencyInput.value;
    let dadosTratados = tratarDadosDoInput(currencyInputValue)

    if ($select.value === "USD") {

      function calcularPreçoUSD(dados) {
        let preçoDolar = dados[0].compra * dadosTratados


        if (!isNaN(preçoDolar)) {

          $valorReal.value = preçoDolar.toLocaleString("PT-BR", { style: "currency", currency: "BRL" })
        }

      }
      dados.then(calcularPreçoUSD)

    }
    else if ($select.value === "EUR") {

      function calcularPreçoEUR(dados) {

        const preçoEuro = dados[1].compra * dadosTratados

        if (!isNaN(preçoEuro)) { $valorReal.value = preçoEuro.toLocaleString("PT-BR", { style: "currency", currency: "BRL" }) }
      }
      dados.then(calcularPreçoEUR)
    }
    else if ($select.value === "BTC") {

      function calcularPreçoBTC(dados) {
        const preçoBTC = dados[2].compra * dadosTratados

        if (!isNaN(preçoBTC)) { $valorReal.value = preçoBTC.toLocaleString("PT-BR", { style: "currency", currency: "BRL" }) }
      }
      dados.then(calcularPreçoBTC)

    }
  }
  if (typeof endValue !== "undefined" && verificarUltimoValor(endValue)) {
    $alert.innerHTML = ` valor invalido ${endValue}`
  }


})
