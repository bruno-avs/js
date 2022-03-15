const filme = {
    nome:"vingadores",
    ano: 2019,
    diretor:"bruno",
    personagem:"thor",}

function analizeString(a){
    for(p in a){
        if(typeof a[p] == "string"){
            console.log(p,a[p])
        }

        
        
    }
}

analizeString(filme)