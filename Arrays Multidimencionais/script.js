//Arrays Multidimencionais não Arrays que apontam para Array
var lista_coisas = [] //O primeiro Array que concentra os outros

lista_coisas['frutas'] = [] 
lista_coisas['frutas'][1]= 'Banana'
lista_coisas['frutas'][2]='Morango'
lista_coisas['frutas'][3]= 'Maça'

lista_coisas['pessoas'] = []
lista_coisas['pessoas'][1]='Marcos'
lista_coisas['pessoas'][2]='Maria'
lista_coisas['pessoas'][3]='José'

document.write(lista_coisas['pessoas'][3])

console.log(lista_coisas)