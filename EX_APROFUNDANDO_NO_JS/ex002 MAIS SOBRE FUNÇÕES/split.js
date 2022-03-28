let myString = "ola meu nome é bruno";
console.log(myString.split(' '))


// o código abaixo converte a data americana para a brasilheira 
var dataInput = '2021-02-06';
data = new Date(dataInput);
dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
console.log(dataFormatada)