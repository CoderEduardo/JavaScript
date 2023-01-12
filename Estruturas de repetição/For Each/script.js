//O For Each server para percorrer um Array, de forma que ele recupera três índices(valor, indice, array)
//

var listaFuncionario = ['Viviane', 'Lucas', 'Rosângela', 'Miguel', 'Luis']

document.write(listaFuncionario[1])

var f = function (valor, indice, array){
    console.log(valor,indice)
}

listaFuncionario.forEach(f) 
  

document.write("<br/>" + listaFuncionario[1])

console.log(listaFuncionario)