const form = document.querySelector("form")
const resp = document.querySelector("pre")

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    let numero = Number(form.inNumero.value)
    let respota = ""

    for(let i = 1; i <= 10;i++){
        respota = respota + numero + " x " + i + " = " + (numero * i) + "\n"
    }

    resp.innerText = respota

})

/*É muito importante na hora de criar a ferramenta do looping usar a concatenação, criando uma variável vazia antes, e depois somando ela com a proxima
reposta*/