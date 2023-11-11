

for(let i = numero; i >= 0; i--) {
    if(i % 2 === 0) {
        console.log(`${i} é par`)
    } else {
        console.log(i)
    }
}

let numero = 50
let i = 0

while(numero >= i) {
    numero--
    if(numero % 2 === 0) {
        console.log(`${numero} é par`)
    } else {
        console.log(numero)
    }
    if(numero === 0) {
        break
    }
}