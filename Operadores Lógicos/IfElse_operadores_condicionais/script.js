var nome = prompt("Digite o seu nome:")
var nota1 = prompt('Digite a sua primeira nota:')
var nota2 = prompt('Digite a sua segunda nota:')
var nota3 = prompt('Digite a sua terceira nota:')
var nota4 = prompt('Digite a sua quarta nota:')
var resultado = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4)) / 4 

var media = 7

if (resultado >= media) {
    document.write('Parabéns ' + nome + ' a sua media foi de ' +resultado+ ' , sendo ela acima de '+media+' e por isso você passou de ano')
}
else {
    document.write(nome + ' infelizmente a sua média foi'+resultado+ " , sendo ela abaixo de " +media+ " para a aprovação")
}