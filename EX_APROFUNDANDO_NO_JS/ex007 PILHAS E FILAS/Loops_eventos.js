// setTimeout define um cronometro e executa uma ação após um determinado periodo de tempo
// é uma api integrada assicrona 
function first() {
    setTimeout(() => {
        console.log(1)
    },0) // com a set time out é possivel comtrolar o tempo em milessegndos
  }
  
  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    setTimeout(() => {
        console.log(3)
    },0)
  }

 
first()    // as tres funções são chamadas e executadas ao mesmo tempo 
second()
third()
//setTimeout leva dois argumentos: a função que será executada de forma assíncrona e a quantidade de tempo que ela aguardará antes de chamar essa função

