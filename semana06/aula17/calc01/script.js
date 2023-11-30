//parseFloat e parseInt
//Number(document.dgd)
// valueAsNumber

function calcular() {
    let numA = document.getElementById('numberA').valueAsNumber
    let numB = document.getElementById('numberB').valueAsNumber

    const soma = numA + numB

    const subtracao1 = numA - numB
    const subtracao2 = numB - numA

    const multiplicacao = numA * numB

    // criar condição para caso usuário tente fazer divisão por zero
    const divisao1 = numA / numB
    const divisao2 = numB / numA

    // exponencial de cada um dos numeros: dica, procurar Math.pow
    // fatorial de cadas um dos numeros
    // mostrar os divisores de cada numero

    document.querySelector('#sum').valueAsNumber = soma
    document.querySelector('#subtractionA').valueAsNumber = subtracao1
    document.querySelector('#subtractionB').valueAsNumber = subtracao2
    document.querySelector('#multiplication').valueAsNumber = multiplicacao
    document.querySelector('#divisionA').valueAsNumber = divisao1.toFixed(2)
    document.querySelector('#divisionB').valueAsNumber = divisao2.toFixed(2)

}