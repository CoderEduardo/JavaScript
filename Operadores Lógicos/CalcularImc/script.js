var nome = prompt("Digite o seu nome:")
var altura = prompt("Digite a sua altura em cm:")
var peso = prompt("Digite o seu peso:")

var altura = parseFloat(altura)
var peso = parseFloat(peso)

altura /= 100

resultado = peso / (altura * altura)

if (resultado <= 16) {
    document.write(nome + ', o calculo do seu imc é' + resultado +  ' e se encontra em: Baixo peso muito grave')
}
else if (resultado <= 16.99) {
    document.write(nome + ', o calculo do seu imc é ' + resultado + ' e se encontra em: Baixo peso grave')
} 
else if(resultado <= 18.49){
    document.write(nome + ', o calculo do seu imc é '+ resultado +' e se encontra em: Baixo peso')
} 
else if (resultado <= 24.99) {
    document.write(nome + ', o calculo do seu imc é ' + resultado +' e se encontra em: Peso normal')
} 
else if(resultado <= 29.99){
    document.write(nome + ', o calculo do seu imc é '+ resultado +'  e se encontra em: Sobrepeso')
}
else if(resultado <= 34.99){
    document.write(nome + ', o calculo do seu imc é ' + resultado +' e se encontra em: Obesidade grau 1')
}
else if (resultado <= 39.99){
    document.write(nome + ', o calculo do seu imc é '+ resultado +' e se encontra em: Obesidade grau 2')
}
else if (resultado >= 40){
    document.write(nome + ', o calculo do seu imc é '+ resultado +' e se encontra em: Obesidade grau 3')
}