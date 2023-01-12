function mudarCor() {
    document.getElementById('caixa').style.backgroundColor = 'yellow'
}

function validarCaixa() {
    var elemento = document.getElementById('caixa').value

    if (elemento.length < 3) {
        document.getElementById('caixa').style.backgroundColor = 'red'
    } else {
        document.getElementById('caixa').style.backgroundColor = 'green'
    }
}