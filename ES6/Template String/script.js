//É uma forma mais pratica de concatenar strings

let nome = 'Jorge'

console.log(`Olá ${nome}`)
console.log(`O resultado de 7 * 7 é: ${7*7}`)
console.log(`O resultado de 8 * 8 é ${calcular(8,8)}`)

function calcular(x,y){
    return x * y
}