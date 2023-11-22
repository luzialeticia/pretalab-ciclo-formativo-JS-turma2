# Aula 13

Slides para esta aula [AQUI](https://www.canva.com/design/DAF0VpzhD8g/7EL5O3tESUJumu01jpJfsQ/view?utm_content=DAF0VpzhD8g&utm_campaign=designshare&utm_medium=link&utm_source=editor)

---

### Callbacks

```javascript
function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

function dividir(a, b) {
  return a / b
}

// DECLARAÇÃO
function calcular(a, b, callback) {
  return callback(a, b)
}

const num1 = 7
const num2 = 2

const somaDoisNumeros = calcular(num1, num2, somar)
console.log(somaDoisNumeros) // 9

const subtracaoDoisNumeros = calcular(num1, num2, subtrair)
console.log(subtracaoDoisNumeros) // 5

const multiplicacaoDoisNumeros = calcular(num1, num2, multiplicar)
console.log(multiplicacaoDoisNumeros) // 14

const divisaoDoisNumeros = calcular(num1, num2, dividir)
console.log(divisaoDoisNumeros) // 3.5
```

##### Com arrow functions

```javascript
const somar = (a, b) => a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

const calcular = (a, b, callback) => callback(a, b)
```

---