//Um programa que na compra de três produtor o terceiro sai pela metado do preço

function calcular(){
    var produto = document.getElementById('produto').value 
    var valorProduto = document.getElementById('valorProduto').value 

    var desconto = Number(valorProduto/2)

    var valor = Number((valorProduto * 2) + desconto)

    var valorTotal = document.getElementById('valorTotal')
    valorTotal.textContent = produto + " - Promoção: Leve 3 por R$: " + valor
 
    var valorDesconto = document.getElementById('valorDesconto') 
    valorDesconto.textContent = "O terceiro produto sai apenas por R$: " + desconto
}

var btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click',calcular)