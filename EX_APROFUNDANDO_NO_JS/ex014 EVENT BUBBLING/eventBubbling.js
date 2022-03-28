const ul = document.getElementById("ul-event");
const button = document.getElementById("add-event");
// event numero 1 
button.addEventListener("click", () => {
  const li = document.createElement("li");
  
  li.textContent = "novo item";
  li.type = "none"
  
  ul.prepend(li);
})

const lis = document.querySelectorAll("li");// array contendo as lis da ul 
console.log(lis)
lis.forEach(li => {
   li.addEventListener("click", evento =>{
       const clicked = evento.target;
      
       clicked.remove()
   })
})
ul.addEventListener("click",event=>{
    event.stopPropagation() // método do objet pointerEvent que inpede que o evento se propague para os elementos pais
    console.log(event.target)
})
const div = document.getElementById("div-event")
div.addEventListener("click",event =>{
  console.log(event.target.tagName)
})