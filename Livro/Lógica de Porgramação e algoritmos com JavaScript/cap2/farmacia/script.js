//Faz o desconto na compra de dois medicamentos do centavos

let btn = document.getElementById("btn")

btn.addEventListener("click", () => {

    let nome = document.getElementById("nome").value
    let preco = document.getElementById("preco").value

    document.getElementById("medicamento").innerText = "Promoção de " + nome
    document.getElementById("promocao").innerText = "Leve 2 por apenas R$: " + Math.floor((preco * 2)).toFixed(2)

})