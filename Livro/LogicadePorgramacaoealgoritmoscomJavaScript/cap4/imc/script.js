let form = document.querySelector("form")

form.addEventListener("submit", (e) => {

    e.preventDefault()
    let nome = form.inNome.value
    let sexo = form.inMasculino.checked                     //.checked confere se a bolinha está selecioanada ou não detro do input radios
    let altura = parseFloat(form.inAltura.value)

    let peso
    if (sexo) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    document.querySelector("h2").innerText = nome + ": Seu peso ideal é " + peso.toFixed(2) + " kg"

})

addEventListener("reset", (e)=>{
    document.querySelector("h2").innerText = ""
})

/*
    Quando usamos um form, conseguimos acessar as suas informções através do id de um input de uma forma muito mais simples,
    é apenas usar a variável que está comportando o formulário(no caso form) e acessar diretamente o nome o id e a sua propriedade.
    Ex: form.inNome.value 
*/