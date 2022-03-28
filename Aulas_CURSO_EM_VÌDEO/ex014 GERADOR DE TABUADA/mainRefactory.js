let $gerarTabuada = document.getElementById('gerar');

$gerarTabuada.addEventListener('click', () => {

    let $inputtxt = document.getElementById('input-n');
    let $tabela = document.getElementById('tab');

    $inputtxt.focus()
    $tabela.innerHTML = ``;

    const createOpitions = (n, s) => {
        let item = document.createElement('option')
        item.text = `${n} x ${s} = ${n * s}`
        item.value = `tab${s}`

        $tabela.appendChild(item)
    }
    if ($inputtxt.value.length == 0) {
        alert('Por favor digite um numero')
    }
    else {
        let valueNumber = Number($inputtxt.value)

        for (let s = 1; s <= 10; s++) {
            createOpitions(valueNumber, s);
        }
        $inputtxt.value = " "
    }

})




