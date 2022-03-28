const marca = "Xiaomi";
const modelo = "Poco X3 Pro";
const versãoAndroid = 11;
const ram = 6;
const CPU = "Octa-core Max 2.96GHz";
const armazenamento = 128;
const estado = " "

const smatphone = (marca, modelo, versãoAndroid, ram, CPU, armazenamento, estado) => ({
    marca,
    modelo,
    versãoAndroid,
    ram,
    CPU,
    armazenamento,
    estado,
    marcaModelo: function() {return marca + " " + modelo},
    ligar: () => {
        if (estado === "desligado" || estado === " ") {
            console.log("Ligando o smartphone " + modelo + " .......")
            setTimeout(() => { console.log("O smartphone " +  + " ligou e esta pronto pra uso.") }, 3000)
            estado = "ligado"
        }
    },
    deligar: ()=>{
        
        setTimeout(()=>{console.log("Desligando aparelho.....")}, 3100)
        setTimeout(()=>{console.log("O aparelho " + marcaModelo() + " esta desligado.")},4000);
        estado = "desligado"  
    }

    })

    
    const s = smatphone(marca, modelo, versãoAndroid, ram, CPU, armazenamento, estado)
    s.marcaModelo()

// class smatphone {
//     constructor(marca, modelo, versãoAndroid, ram, CPU, armazenamento,status) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.versãoAndroid = versãoAndroid;
//         this.ram = ram;
//         this.CPU = CPU;
//         this.armazenamento = armazenamento;
//         this.status = status;
//     }
//     get marcaModelo() {
//         return this.marca + " " + this.modelo;
//     }   
//     set statusDoAparelho(status){
//         return this.status = status
//     } 
//     ligar() {
//         if(this.status === "desligado" || this.status === " "){
//         console.log("Ligando o smartphone " + this.modelo + " .......")
//         setTimeout(()=>{console.log("O smartphone " + this.marcaModelo + " ligou e esta pronto pra uso.")}, 3000)
//         this.statusDoAparelho = "ligado"
//     }
//     else{
//         console.log("O aparelho precisa estar desligado")
//     }

//     }
//     desligar(){
//         setTimeout(()=>{console.log("Desligando aparelho.....")}, 3100)
//         setTimeout(()=>{console.log("O aparelho " + this.marcaModelo + " esta desligado.")},4000);
//         this.statusDoAparelho = "desligado"
//     }


// }
// class po extends smatphone {
//     constructor(marca, modelo, versãoAndroid, ram, CPU, armazenamento,status){
//         super(marca, modelo, versãoAndroid, ram, CPU, armazenamento,status)
//     }
// }
// const myCelular = new smatphone(marca, modelo, versãoAndroid, ram, CPU, armazenamento," ")



// myCelular.desligar()
