var equacao = prompt("Digite o tipo de operação a ser efetuada (adição ou subtração)")
var num1 = prompt("Digite o primeiro número")
var num2 = prompt("Digite o segundo número:")

if (equacao == 'adição'){
   var resultado = parseFloat(num1)  + parseFloat(num2)
   document.write('O resultado da adição é: ' +resultado)
} 
else if (equacao == 'subtração'){
    resultado =parseFloat(num1) - parseFloat(num2)
    document.write('O resultado da subtração é: ' +resultado)
} 
else {
    document.write('Ocorreu algum erro, por favor recarregue a página')
}
