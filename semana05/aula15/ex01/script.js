//console.log("Aqui vai nosso JS")

const inputUm = document.querySelector('#num1')
const inputDois = document.querySelector('#num2')
const botaoForm = document.querySelector('#botaoSomar')
const formulario = document.querySelector('form')
const caixaResultado = document.querySelector('#caixaResultado')

console.log(inputUm, inputDois, botaoForm)

// função com a soma
// previnir o form de atualizar a página

const enviaValores = (evento) => {
    evento.preventDefault()

    const valor1 = Number(inputUm.value)
    const valor2 = Number(inputDois.value)
    
    const total = valor1 + valor2

    let resultado = document.createElement('p')
    caixaResultado.appendChild(resultado)
    resultado.innerText = `o resultado de ${valor1} + ${valor2} é = ${total}`
}

formulario.addEventListener("submit", enviaValores)