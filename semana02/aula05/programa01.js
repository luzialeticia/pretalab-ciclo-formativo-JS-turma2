//Crie um programa que receba 2 números,
// calcule a soma deles e em seguida verifique
// se essa soma é maior que 100.

let numero01 = 2
let numero02 = 2
const soma = numero01 + numero02

// if(soma > 100) {
//     //A soma entre os números 6 e 8 é maior que 100
//     console.log(`Resultado: ${soma}. A soma entre os números ${numero01} e ${numero02} é maior que 100.`)
// } else if (soma === 100){
//     console.log(`Resultado: ${soma}. A soma entre os números ${numero01} e ${numero02} é igual a 100.`)
// } else {
//     console.log(`Resultado: ${soma}. A soma entre os números ${numero01} e ${numero02} é menor que 100.`)
// }

/*
Crie um algoritmo que receba dois números e determine qual é o menor entre eles.
Se os números forem iguais, mostre uma mensagem no console "Os números são iguais.
*/

if(numero01 < numero02) {
    console.log(`${numero01} é menor.`)
} else if(numero02 < numero01) {
    console.log(`${numero02} é o menor.`)
} else {
    console.log('Os números são iguais.')
}