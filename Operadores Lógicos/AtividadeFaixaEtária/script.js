var idade = prompt('Digite a sua idade:')

if (idade <= 15) {
    document.write("Você é uma criança")
} else if (idade <= 30) {
    document.write("Você é um Jovem")
} else if (idade <= 60){
    document.write("Você é um adulto")
} else if (idade >= 60) {
    document.write("Você é um idosso")
}

