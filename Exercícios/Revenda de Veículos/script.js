function calcular(){
    var inVeiculo = document.getElementById('inVeiculo')
    var inValor = document.getElementById('inValor')
    var outVeiculo = document.getElementById('outVeiculo')
    var outValorEntrada = document.getElementById("outValorEntrada")
    var outValorParcelado = document.getElementById("outValorParcelado")

    var veiculo = inVeiculo.value 
    outVeiculo.textContent = "Promoção: " + veiculo

    var valor = inValor.value
    var entrada = Number(valor / 2 ) 
    outValorEntrada.textContent = "Valor da Entrada: " + entrada

    var parcelado = outValorParcelado 
    parcelado = (entrada / 12)
    outValorParcelado.textContent = "12x de: " +parcelado.toFixed(2)


}

var btnPromocao = document.getElementById('btnPromocao')
btnPromocao.addEventListener("click",calcular)