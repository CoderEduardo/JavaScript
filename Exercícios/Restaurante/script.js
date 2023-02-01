function calcular(){
    var quilo = document.getElementById('quilo').value
    var consumo = document.getElementById('consumo').value

    var resultado = document.getElementById('valor')

    var valor = Number((quilo / 1000) * consumo)

    resultado.textContent = "Valor a pagar: "  + valor + "$"
    
}

var btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener("click",calcular)