function distribuiCaracter() {
    var caracter = document.getElementById('entrada').value

    document.getElementById('entrada').value = ''

    caracter.trim()

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById('numeros').value += caracter
            break;      //Se ele não for um número obrigatoriamente é uma letra
        default:
            document.getElementById('letras').value += caracter
    }
}