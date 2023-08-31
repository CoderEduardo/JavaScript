const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    let numero = Number(form.inNumero.value)
    let resultado = `Entre ${numero} e 1: `

    for(let i = numero; i > 0; i--){
       resultado = resultado + i +", "
    }

    document.querySelector("h2").innerText = resultado

})


