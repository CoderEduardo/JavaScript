const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const lista = []
    let resultado = ""
    let paciente = form.inPaciente.value
    lista.push(paciente)

    for (let i = 0; i < lista.length; i++) {

        resultado += `${i+1} - ${lista[i]} \n`

    }

    document.querySelector("pre").innerText = resultado
    form.inPaciente.value = ""
    form.inPaciente.focus()

})


