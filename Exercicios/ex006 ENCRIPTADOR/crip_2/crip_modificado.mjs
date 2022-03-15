
function encriptar(txt) {
    let split = (s) => { let n = s.toLowerCase(); return n.split(""); }
    let format = " "
    split(txt).forEach((split) => {
       // adicionar a cripitografia 
        if (split === " ") { format += " " }
        for (let n = 0; n <= simbolos.length; n++) {
            if (split === simbolos[n]) {
                split = crip[n]
                format += split
            }
        }
    });
    return format;
}

console.log(encriptar("ola meu nome é eu vou me matar mes que vem "));