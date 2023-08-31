/*Criar um programa que amostra quais são os anos de copa do mundo.
A copa do mundo acontece desde de 1930, exceto nos anos de 1942 e 1946 por causa da segunda guerra mundial
*/
const prompt = require("prompt-sync")()

console.log("Programa anos da copa do mundo. Digite 0 para sair")

do {

    let numero = Number(prompt("Digite qual ano você quer saber se foi de copa do mundo: "))
    let respota = ""

    if (numero == 0) {
        break
    } else if (numero < 1930) {
        respota = "Esse ano não ainda não exisita a copa do mundo"
    } else if (numero == 1942 || numero == 1946) {
        respota = "Esse ano não tivemos copa do mundo, pois estava acontecendo a segunda guerra mundial"
    } else if (numero % 4 == 2) {
        respota = "Esse ano é um ano de copa do mundo"
    }

    console.log(respota)

} while (true)