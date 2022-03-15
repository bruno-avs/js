export function tratarDados(dadosCurrency){
     let dados = []    
     for(let campo in dadosCurrency){    
         const currency = {}
        currency.compra = Number(dadosCurrency[campo].bid);
        currency.venda = Number(dadosCurrency[campo].ask);
        currency.porcentagemVariação = Number(dadosCurrency[campo].pctChange) * 100 + " %";
        currency.dataCotação = dadosCurrency[campo].create_date.split(" ");
        dados.push(currency)
       
    } 
    return dados    
}

export async function requestCurrency() {
    try{
        const dadosRequest = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL", { "method": "GET" })
        const dadosCurrencys = await dadosRequest.json();
        
        let dados = tratarDados(dadosCurrencys);
        return dados
    } catch(erro){
      console.log(erro)
    }
    
}




