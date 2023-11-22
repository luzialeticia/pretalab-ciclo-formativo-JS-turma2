const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numerosDobrados = numeros.map(function (item) {
//     return item * 2
// })

// ARROW FUNCTION
numerosDobrados = numeros.map(item => item * 2)

console.log(numerosDobrados)

const valores = [10, 100, 150, 345]
const valoresComDesconto = valores.map(valor => valor *(0.9))

console.log(valoresComDesconto)

