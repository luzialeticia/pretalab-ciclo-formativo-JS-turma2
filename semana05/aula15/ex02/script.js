const alunas = []
const nome = document.getElementById('inputNome')
const formulario = document.querySelector('form')
const lista = document.querySelector('#lista-alunas')

// cadastrar aluna no array de alunas da PretaLab
// exibir cada nome na lista da tela
const insereNome = (evento) => {
    evento.preventDefault()

    alunas.push(nome.value)
    
    //[Leticia, Renata...]
    // alunas[0]
    // alunas[1]

    let item;

    for (let i = 0; i < alunas.length; i++) {
        item = document.createElement('li')
        item.textContent = alunas[i]
    }
    lista.appendChild(item)

    console.log(alunas)
}

formulario.addEventListener('submit', insereNome)