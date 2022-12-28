const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lampada')

function quebrada() {
    return lampada.src.indexOf('quebrada') > -1
}

function ascender() {
    if (!quebrada()) {
        lampada.src = 'img/ligada.jpg'
    }
}

function apagar() {
    if (!quebrada()) {
        lampada.src = 'img/desligada.jpg'
    }
}

function quebrar() {
    lampada.src = 'img/quebrada.jpg'
}

ligar.addEventListener('click', ascender)
desligar.addEventListener('click', apagar)
lampada.addEventListener('mouseover', ascender)
lampada.addEventListener('mouseleave', apagar)
lampada.addEventListener('dblclick', quebrar)