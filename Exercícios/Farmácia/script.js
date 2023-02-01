//A prospota desse programa é dar um desconto quando o cliente compra o mesmo produto duas vezes, o desconto seria tirar os centavos

function calcular(){
    var inNome = document.getElementById('inNome')
    var inValor = document.getElementById('inValor')

    var nome = inNome.value 
    var valor = Number(inValor.value)
    valor = Math.floor(valor * 2)

    var outNome = document.getElementById('outNome')
    outNome.textContent = "Promoção de " + nome

    var outValor = document.getElementById('outValor')
    outValor.textContent ="Leve 2 por apenas " + valor

}

var btnCalcular = document.getElementById('btnCalcular') 
btnCalcular.addEventListener("click",calcular)