let operacao = 'leticia'
let num1 = 10
let num2 = 3

//A operação escolhida foi soma e o resultado é 13

//typeof
//isNaN()

if(isNaN(num1) || isNaN(num2)) {
    console.log('Só trabalhamos com números')
} else {
    switch (operacao) {
        case 'soma':
            console.log(`A operação escolhida foi ${operacao} e o resultado é ${num1+num2}`)
            break
        case 'multiplicação':
            console.log(`A operação escolhida foi ${operacao} e o resultado é ${num1*num2}`)
            break
        case 'subtração':
            console.log(`A operação escolhida foi ${operacao} e o resultado é ${num1-num2}`)
            break
        case 'divisão':
            console.log(`A operação escolhida foi ${operacao} e o resultado é ${num1/num2}`)
            break
        default:
            console.log('operação inválida')
            break
    }
}
