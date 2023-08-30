//Calcula o preço que a pessoa vai ter que pagar em um restaurante por quilo

let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{

    let valor = document.getElementById("valor").value 
    let consumo = document.getElementById("consumo").value
    let h2 = document.querySelector("h2")
    let resultado = (consumo / 1000) * valor

    h2.innerText = "Valor a pagar R$: " + resultado

})