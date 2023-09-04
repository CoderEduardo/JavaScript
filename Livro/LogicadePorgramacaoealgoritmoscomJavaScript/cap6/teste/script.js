const cidades = ['Jacutinga','Rio de Janeiro',"Mato Grosso"]

console.log("-".repeat(40)) //.repeat faz com oq está entre aspas se repita a quantidade de vezes indicada
console.log(cidades.toString()) //.toString() mostra todos os itens dentro de um Array
console.log(cidades.join(" - ")) //.join() mostra todoos os itens dentro de um Array, só que agora você consegue escolher o que vc vai apresentar nos 

for(const cidade of cidades){
    console.log(cidade)
}

cidades.forEach((cidade, i ) => {
    console.log(i++ + " Cidade: " + cidade)
})