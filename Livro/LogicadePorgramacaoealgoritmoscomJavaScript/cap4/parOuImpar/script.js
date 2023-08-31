//Verifica se um número é par um ímpar

let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    let numero = form.inNumero.value
    let h2 = document.querySelector("h2")
    let parImpar = numero % 2

    parImpar == 0 ? h2.innerText = numero + " é par" : h2.innerText = numero + " é ímpar"

})