const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const somarTodos = (acumulador, indexDoItemAtual) => acumulador + indexDoItemAtual

// const numerosSomados = numeros.reduce(somarTodos)

const numerosSomados = numeros.reduce((acumulador, indexDoItemASerSomado) => acumulador + indexDoItemASerSomado)

console.log(numerosSomados)

const numerosSomadosAPartirDeDez = numeros.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual
}, 10)

console.log(numerosSomadosAPartirDeDez)