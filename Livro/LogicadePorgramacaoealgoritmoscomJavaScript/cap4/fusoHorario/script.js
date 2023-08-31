let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    let hora = parseFloat(form.inHora.value) + 5

    if (hora > 24) {
        hora = hora - 24
    } 

    document.querySelector("h2").innerText = "Hora na França: " + hora.toFixed(2)

})