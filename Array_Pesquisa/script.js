var lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1]='Maça'
lista_frutas[2]='Morango'
lista_frutas[3] ='Uva'

var elemento = lista_frutas.indexOf("Morango") 

//A partir de uma vereficação é possivel saber se o elemento existe ou não dentro do Array
if (elemento=== -1){
    console.log('Esse elemento não existe dentro do Array')
} else{
    console.log("Esse elemento existe dentro do Array e está na posição: "+elemento)
}