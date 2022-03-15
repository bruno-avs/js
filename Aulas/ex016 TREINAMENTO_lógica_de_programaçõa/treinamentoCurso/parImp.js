function parImpFato(f){
    for(let c = 0; c <= f; c++){
        if(c % 2 === 0)
        console.log(`${c} Par`)
        else
        console.log(`${c} Impar`)
    }
}
parImpFato(5)