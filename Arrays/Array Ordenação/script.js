var lista_frutas = []
/*
lista_frutas[0] = 'Maça'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Abacate'

//.sort() arruma os Arrays em ordem alfabética 
console.log(lista_frutas.sort())*/

//Usado para ordenar os número em ordem crescente
var lista_numeros = []

lista_numeros[0] = 12
lista_numeros[1] = 50
lista_numeros[2] = 1
lista_numeros[3] = 19
lista_numeros[4] = 45

console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros(a,b){
    return a - b
}


