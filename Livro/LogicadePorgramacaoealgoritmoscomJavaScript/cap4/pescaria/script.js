var prompt = require('prompt-sync')();

let pessoas = prompt("Digite o seu número de pessoas:")
let peixes = prompt("Digite o número de peixes: ")
let valor

peixes <= pessoas ? valor = pessoas * 20 : valor =  (pessoas * 20) + ((peixes - pessoas) * 12)

console.log(`Pagar R$: ` + valor)