var nome = 'Luis Eduardo Ferreira de Faria'

// a propriedade length retornar a quantidade retorna a quantidade de caracteres dentro de uma string
document.write(nome.length)

document.write("<br>")

// a propriedade charAt() retorna o caracter situado no índice específico
document.write(nome.charAt(15))

document.write("<br>")

// a propriedade indexOf() procura o primeira ocorrência do caracter específico
document.write(nome.indexOf('F'))

document.write("<br>")

// a propriedade replace() troca uma string por outra
document.write(nome.replace('Luis Eduardo', 'Marcos Paulo'))

document.write("<br>")

// a propriedade substr() identifica o começo da separação a partir do primmeiro parametro, e o segundo parametro diz o quanto ele vai recortar da string
document.write(nome.substr(5,7))

document.write("<br>")

// a propriedade toLowerCase() modifica toda a string para caracteres com a letra minúscula 
document.write(nome.toLowerCase())

document.write("<br>")

// a propriedade toUpperCase() modifica toda a string para caracters com a letra maiúscula
document.write(nome.toUpperCase())

document.write("<br>")

// a propriedade trim() elimina das extremidades os espaços
document.write(nome.trim())
