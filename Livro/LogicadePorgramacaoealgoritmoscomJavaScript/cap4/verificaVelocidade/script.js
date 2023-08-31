const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    let velocidade = parseFloat(form.inVelocidade.value) 
    let condutor = parseFloat(form.inCondutor.value )
    let h2 = document.querySelector("h2")
    let parms = condutor * 0.20 + condutor
    
    if(velocidade <= condutor){
        h2.innerText = "Sem multa"
    } else if(velocidade <= parms){
        h2.innerText = "Multa leve"
    } else if(velocidade > parms){
        h2.innerText = "Multa grave"
    }

})