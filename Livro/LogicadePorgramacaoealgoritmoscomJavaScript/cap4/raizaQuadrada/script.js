let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    let numero = parseInt(form.inNumero.value)
    h2 = document.querySelector("h2")
    let raiz = Math.sqrt(numero)

    if (Number.isInteger(raiz)){
        h2.innerText = "Raiz: "  + raiz
    } else {
        h2.innerText = "Esse número não possui uma raiz exata, por favor informe outro"
    }

})