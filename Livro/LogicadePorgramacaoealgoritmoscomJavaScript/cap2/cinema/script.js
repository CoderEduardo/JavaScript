//Faz o calculo em horas e minutos do filmes

function mostrarFilme() {
    let filme = document.getElementById("filme").value
    let h2 = document.querySelector("h2")
    h2.textContent = filme
}

function cacularHora(){
    let duracao = document.getElementById("duracao").value
    let h3 = document.querySelector("h3")
    let horas = Math.floor(duracao / 60)
    let minutos = duracao % 60
    h3.innerText = horas + " hora(s) e " + minutos + " minutos"
}

function enviar() {
    mostrarFilme()
    cacularHora()
}
