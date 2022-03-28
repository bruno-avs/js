// estruturas de repetição for..in e for..of
const pessoa = {
    nome:"ricardo",
    idade: 33,
    sexo:"masculino", 
}
for(let vv in pessoa){//para cada valor dentro do objeto pesssoa execute ....
    console.log(vv, pessoa[vv])
}
// for .. of só funciona com arrays
const pessoa2= ['luan',22]

for(let v of pessoa2){
    console.log(v)
}
