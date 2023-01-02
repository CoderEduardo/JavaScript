var num1 = prompt("Digite o valor do primeiro número:")
var num2 = prompt("Digite o valor do segundo número:")

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write('O resultado da some entre '+num1+' e '+num2+ ' é :' + (num1 + num2) + '<br>')
document.write('O resultado da subtração entre '+num1+' e '+num2+ ' é :' + (num1-num2) +'<br>')
document.write('O resultado da multiplicação entre '+num1+' e '+num2+ ' é :' + (num1*num2) +'<br>')
document.write('O módulo entre '+num1+' e '+num2+ ' é :' + (num1%num2) +'<br>')
document.write('O incremento de '+num1+' é ' + (++num1) +'<br>')
document.write('O decremento de '+num1+' é ' + (--num1) +'<br>')

/*Atribuição de valores de forma resumida*/

var teste = 10 
teste += 5

/*Fazendo isso podemos atribuir qualquer valor, apenas mudando o sinal 

+=
-=
*=
/=
%=

*/

document.write(teste)