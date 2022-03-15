const fila = () => {
    const data = [];
    const add = (value) => {// função que adiciona um item na fila
        data.unshift(value)
    }
    const out = () => { // função que remove um item da fila 
        if(data.length === 0 ){
           console.log("fila fazia")        }
        const value = data[data.length-1];
        data.splice(data.length-1, 1);
        return value;
    }
    const print = () => {
        console.log(data)
    }
    return{
        add, out, print
    }
}

const Fila = fila()
Fila.add(1)
Fila.add(2)
Fila.add(3)
Fila.add(4)
Fila.add(5)
Fila.print()
Fila.out()
Fila.out()
Fila.out()
Fila.out()
Fila.out()
Fila.out()
Fila.print()

