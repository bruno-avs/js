//map é uma hogher-order function que atua em array iterrando e copiando um array e retornado o mesmo com valores diferentes 
numbers = [1, 9, 3, 45, 3];
const numbersElevado = numbers.map(item => item ** 7);
console.log(numbers)// perceba que o array original não foi modificado 
console.log(numbersElevado)// mas copiado com valores diferentes 

// o map pode receber tres parametros diferentes 
numbers.map((item, index, array) => { })

// exemplo de uso do map 
const tvShows = [
    { name: 'Breaking bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2015 },
    { name: 'True Detective', releaseYear: 2014 },
    { name: 'Hannibal', releaseYear: 2013 },
    { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
    { name: 'House M.D', releaseYear: 2004 },
    { name: 'watchmen', releaseYear: 2019 },
]
const nameTvShows = tvShows.map((item) => item.name);
const releaseYear = tvShows.map(({releaseYear}) => releaseYear)// usando um destruction que posibilita 
console.table(nameTvShows)
console.log(releaseYear)

