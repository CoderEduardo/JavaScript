//O usuário vai inserir um nome de uma fruta, e esse nome deverá se repitir a quantidade de vezes que ele indidicar
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {

    e.preventDefault()
    let fruta = form.inFruta.value
    let numero = Number(form.inNumero.value)
    let respota = ""

    for (let i = 1; i <= numero; i++) {
        respota = `${respota} ${fruta} * `
    }

    document.querySelector("h2").innerText = respota
    
})