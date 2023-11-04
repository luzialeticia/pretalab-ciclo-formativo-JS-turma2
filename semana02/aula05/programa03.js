/*
Elabore um programa que receba uma string com dia da semana e devolva um número
(1-7) correspondente ao dia da semana.
*/

let diaSemana = 'letícia'

switch(diaSemana) {
    case 'domingo':
        console.log(1)
        break
    case 'segunda':
        console.log(2)
        break
    case 'terça':
        console.log(3)
        break
    case 'quarta':
        console.log(4)
        break
    case 'quinta':
        console.log(5)
        break
    case 'sexta':
        console.log(6)
        break
    case 'sábado':
        console.log(7)
        break
    default:
        console.log('digite um dia válido!')
}