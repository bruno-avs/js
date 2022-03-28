// const tvShows = [
//     { name: 'Breaking bad', releaseYear: 2008 },
//     { name: 'Mr. Robot', releaseYear: 2015 },
//     { name: 'True Detective', releaseYear: 2014 },
//     { name: 'Hannibal', releaseYear: 2013 },
//     { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
//     { name: 'House M.D', releaseYear: 2004 },
//     { name: 'watchmen', releaseYear: 2019 },
// ]
// // vai retornar uma string contendo só o nome das series
// const nameTvShows = tvShows.reduce((accumulator, { name }) => `${accumulator} o ${name}\n`, "")
// // outra maneira
// const nameTvShows2 = tvShows.reduce((accumulator, { name }, index) => `${accumulator} ${index + 1} ${name}\n`, "")

// console.log(nameTvShows)
// console.log(nameTvShows2)
// // outro exemplo 
const people = [
    { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' },
]

const agesFrequency = people.reduce((accumulator,{age}) => {
 accumulator[age] = accumulator[age] + 1 || 1 // curto circuito 
 return accumulator
},{})
console.log(agesFrequency)