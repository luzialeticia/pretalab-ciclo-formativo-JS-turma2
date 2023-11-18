// (parseFloat()).toFixed()
// valor1.toFixed(2)

//isNaN

const somaValores = () => {
    let valor1 = parseInt(prompt('Digite um número'))
    let valor2 = parseInt(prompt('Digite outro número'))

    if(isNaN(valor1) === true || isNaN(valor2 === true)) {
        alert('Por favor digite um número')
    } else {
        let soma = valor1+valor2
        alert(`Resultado = ${soma}`)
    }
}

somaValores()