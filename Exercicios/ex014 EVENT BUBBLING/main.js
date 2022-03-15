const ul = document.getElementById("ul-event");
const button = document.getElementById("add-event");
//event delegation
ul.addEventListener("click", event =>{
   const clickedEvent = event.target;
   if(clickedEvent.tagName === "LI"){
      clickedEvent.remove()
   }
})
button.addEventListener("click",()=>{
    const li = document.createElement("li");
    li.style.listStyleType = "none";
    li.textContent = "novo item";
    ul.prepend(li)
})