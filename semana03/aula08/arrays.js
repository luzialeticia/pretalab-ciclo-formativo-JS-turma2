const itens = ['Fulana', 32, {altura: 1.57}, true, 'Ciclana']

console.log(itens)
console.log(itens[1])

//indexOf
console.log(itens.indexOf('Ciclana'))
console.log(itens.indexOf(32))

//push e pop
const listaAlunas = []
console.log(listaAlunas)

listaAlunas.push('Marcela')
//0
console.log(listaAlunas)
listaAlunas.push('Naira', 'Jéssica', 'Cailane', 'Cristina', 'Luciana', 'Gabriella')
//0, 1, 2, 3
//[
//     'Marcela',
//     'Naira',
//     'Jéssica',
//     'Cailane',
//     'Cristina',
//     'Luciana',
//     'Gabriella'
//   ]

console.log(listaAlunas)

// listaAlunas.pop('Cailane')
// console.log(listaAlunas)

listaAlunas.splice(2)

console.log(listaAlunas)

console.log(listaAlunas.length)


//unshift
listaAlunas.unshift('Angélica')
console.log(listaAlunas)

listaAlunas.shift()
console.log(listaAlunas)
listaAlunas.splice(0, 1)
console.log(listaAlunas)

