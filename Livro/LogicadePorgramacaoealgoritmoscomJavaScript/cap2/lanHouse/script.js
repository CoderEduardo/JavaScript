//Ler quanto devera pagar o cliente a cada 15 minutos, e a fração restante do valor ser cobrada de forma integral

let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{

    let valor = document.getElementById("valor").value
    let tempo = document.getElementById("tempo").value 
    let resultado = Math.ceil(tempo / 15) * valor
    document.querySelector("h2").innerText = "Valor a pagar R$: " + resultado

})