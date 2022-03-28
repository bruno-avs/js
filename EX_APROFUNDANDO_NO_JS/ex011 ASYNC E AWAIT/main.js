// let url = "http://jsonplaceholder.typecode.com/user"

// const request = async (numb1,num2)=>{
//  if(typeof numb1 != 'number' || typeof num2 != 'number'){ throw 'erroo '}
//   return numb1 + num2

// }
// request(1,2).then((value)=>{ console.log(value)}).catch(value =>{
//     console.log(value)
// })

// const requests = async ()=>{
//    fetch(url)
//    }

//    requests().then((value)=>{ console.log(value)}).catch(value =>{
//        console.log(value)
//    })

   const promessa1 = async ()=>{
        const response = await new Promise((resolved,re)=>{
               re("erro")
        })
     console.log(response)
   }
   promessa1()
   

const promessa = async () => {
    try {
        const response = await new Promise((resolved) => {
        resolved("assss")
        })
        console.log(response)
    } catch(erro){
        console.log("ola " + erro)
    }

   
}

promessa()
.catch((erro)=>{
    console.log("ola"+ erro)
})

