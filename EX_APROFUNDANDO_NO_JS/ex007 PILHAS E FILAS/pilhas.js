const stack =() => {
    const data = []
    let top = -1; // top tem que ser -1 porque o valor vai ser encrementado a ele depois 

    const push = (value) => {
        top++; // aqui o valor é encrementado a top deichando de ser -1 e viramdo 0
        data[top] = value
        console.log(data)
    }
    const pop = () => {// esta arrow function retira um item do topo da pilha 
     if(top < 0){ // verifica se o valor de top é menor que 0, significa que todos os item ja sairam da lista e top vale -1 agora 
         return false
     } 
     else{
         const itemToReturn = data[top];
         data.splice(top,1);
         top--;
         return itemToReturn;
     }
    }
    const print = () => {
        console.log(data)// esta função vai escrever o vetor no console
    }
    const isFull = () =>{// verifica se a pinha esta cheia 
        if(top >= 4) console.log("full !!!");

        else  console.log("note full !!!!");    
    }
    const peek = () =>{ // função que mostra o item que esta no topo
        console.log(data[top])
    }
    return { // sempre export as funções, para que elas possam ser acessadas de fora 
      push, pop , print, isFull, peek
    } // sempre use chaves tambem

}


const Stack = stack();
Stack.push(6)
Stack.push(5)

console.log(Stack.pop())
Stack.print()
Stack.push(2)
Stack.push(8)
Stack.push(9)
Stack.push(10)
Stack.isFull()
Stack.peek()