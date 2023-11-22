const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const impar = item => item % 2 !==0

// const numerosImpares = numeros.filter(impar)

const numerosImpares = numeros.filter(item => item % 2 !== 0)

console.log(numerosImpares)

