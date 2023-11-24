const div = document.querySelector('#box')
const button = document.getElementById('button')

// mudar o background color da div
// mudar o texto da div
// até logo quando mouse sai da div
const bgChange = () => {
    const cor = 'red'
    return cor
}

div.addEventListener('mousemove', () => {
// Bônus: backgroundColor passar por cores aleatórias enquanto
// o mouse se move sobre ela

// Dica: rgb colors e pesquisar sobre Math.random e Math.floor

    div.innerText = 'Vc está se movendo!'
    div.style.backgroundColor = bgChange()
})

div.addEventListener('mouseout', () => {
    div.innerText = 'Até logo!'
    div.style.backgroundColor = 'hotpink'
})
// ao clicar na div, aparecer texto: "Está clicando em mim"


//onClick
// clicar no botão: aparecer gif
// clicar de novo: sumir gif
// https://media.giphy.com/media/xTg8B47N8waMBhp0qc/giphy.gif
const gif = document.createElement('img')
gif.src = "https://media.giphy.com/media/xTg8B47N8waMBhp0qc/giphy.gif"

button.addEventListener('click', () => {
    if(button.innerText == 'Faça aparecer um gif, clique em mim!') {
        document.body.appendChild(gif)
        button.style.backgroundColor = 'red'
        button.innerText = "Faça o gif sumir clicando em mim!"
    } else {
        document.body.removeChild(gif)
        button.innerText = 'Faça aparecer um gif, clique em mim!'
        button.style.backgroundColor = 'green'
    }
})

// removeEventListener
// ver active e tentar usar para trocar cor do botao
