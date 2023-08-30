let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault() //Previne o envio do formulário

    let nome = document.getElementById("nome").value 
    let nota1 = document.getElementById("nota1").value 
    let nota2 = document.getElementById("nota2").value 
    let media = (parseFloat(nota1) + parseFloat(nota2)) / 2
    let h3 =  document.querySelector("h3")
    document.querySelector("h2").innerText = "Média das Notas " + media

    if (media >= 7){
       h3.innerText = "Parabéns " + nome + "! Você foi aprovado(a)"
       h3.style.color = "blue"
    } else if (media < 7 ){
        h3.innerText = "Ops " + nome + "! Você foi reprovado(a)"
        h3.style.color = "red"
    }

})