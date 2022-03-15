// o filter também é uma higher-order function ela funciona de forma parecida com a map, a diferençã é que ela executa uma condição e retorna true ou false dependendo do resultado
// se o valor retornado for true o valor é adicionado ao novo array, se for false o valor é ignorado
const tvShows = [
    { name: 'Breaking bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2015 },
    { name: 'True Detective', releaseYear: 2014 },
    { name: 'Hannibal', releaseYear: 2013 },
    { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
    { name: 'House M.D', releaseYear: 2004 },
    { name: 'watchmen', releaseYear: 2019 },
]
//retornar só as series produzidas de 2015 pra ca 
const resultado2015 = tvShows.filter(({releaseYear}) =>  releaseYear >= 2015);
console.table(resultado2015)

// outro exmplo 
const fistTravelerCities = [
    'Sydney',
    'Berlim',
    'Lisboa',
    'Sófia',
    'Praga',
    'Bali',
    'Florianópolis'
];
const secondTravelerCities = ['Praga', 'Roma','Chiang Mai','Lisboa','Zagreb'];
const citiesParalelo = fistTravelerCities.filter(item => secondTravelerCities.includes(item))
console.log(citiesParalelo)


