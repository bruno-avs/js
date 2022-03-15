
function encriptar(txt) {
    let split = (s) => { let n = s.toLowerCase(); return n.split(""); }// esta função formata as letra em minusculo e separa elas em um array
    let format = " "
    function codificador(split) {
        let simbolos = ["a", "á", "à", "b", "c", "d", "e", "é", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "ç", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        let crip = ["|@|", "|@`|", "|@´|", "|>", "<", "<|", "!=", "!=`", "|=", "&]", "|-|", "|", "{", "|#", "|_", "///", "//", "+", "*|", "&,", "|}", "/$/", "-|-", "|_|", "|/", "/|/", "/%", "-/", "_/-", ",<", "!", "@", "#", "$", "%", "¨", "&", "*", "(", ")"]// adicionar a cripitografia 
        if (split === " ") { format += " " }
        for (let n = 0; n <= simbolos.length; n++) {
            if (split === simbolos[n]) {
                split = crip[n]
                format += split
            }
        }
    }
    split(txt).forEach(codificador);
    return format;
}

console.log(encriptar("ola meu nome é bruno eu vou me matar mes que vem "));