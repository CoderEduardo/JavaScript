//Ao levar três produtos o terceiro sai pela metade do preço

let btn = document.getElementById("btn")

btn.addEventListener("click", () =>{

    let produto = document.getElementById("produto").value 
    let preco = document.getElementById("preco").value 
    let resultado = (preco * 2 ) + (preco / 2)
    document.getElementById("promocao").innerText =  produto + " - " + "Promoção: Leve 3 por R$: " + resultado
    document.getElementById("terceiro").innerText = "O terceiro produto custa apenas R$: " + preco / 2
   
})