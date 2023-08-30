//Mostra o valor da entrada do carro e as parcelas

btn.addEventListener("click", () => {

    let veiculo = document.getElementById("veiculo").value
    let preco = document.getElementById("preco").value

    document.getElementById("nome").innerText = "Promoção: " + veiculo
    document.getElementById("entrada").innerText =  "Entrada de R$: " + (preco / 2).toFixed(2)
    document.getElementById("parcela").innerText = "+12x de R$ " + ((preco / 2) / 12).toFixed(2)
})

