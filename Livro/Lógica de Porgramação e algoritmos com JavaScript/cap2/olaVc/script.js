//Mostra o seu nome na tela quando digitado

function mostrar() {

    let h3 = document.querySelector("h3")
    let nome = document.getElementById("nome").value

    h3.innerHTML = "Olá " + nome

}