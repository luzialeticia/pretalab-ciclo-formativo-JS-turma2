// querySelector

let buttonLegal = document.querySelector('#buttonLegal')
let buttonLegalClass = document.querySelector('.coxinha')
let buttonLegalTag = document.querySelector('button')

//console.log(buttonLegal)

// textContent
let sectionAText = document.getElementById('a')
// console.log(sectionAText.textContent)

let sectionATitle = document.querySelector('#sectionA')
sectionATitle.textContent = "Novo Título"

// innerHTML
let sectionB = document.getElementById('sectionB')
console.log(sectionB.innerHTML)

sectionB.innerHTML = "<em>Section</em> B <p>Novo parágrafo</p>"
document.getElementById('b').innerHTML += "<p>Outro parágrafo</p>"

// input.value
let inputIdade = document.querySelector('#idade')
console.log(inputIdade.value)

inputIdade.value = 33
// ver pq o 33 some depois da função

const aumentaIdade = () => {
    return parseInt(inputIdade.value) + 1
}

document.getElementById('d').innerHTML += aumentaIdade()

// Manipulando CSS

let buttonOk = document.querySelector('.botao-ok')

buttonOk.style.color = "red"
buttonOk.style.backgroundColor = "yellow"
//console.log(buttonOk.classList)

// Adicionando classes
let buttonBacana = document.querySelector('#bacana')

buttonBacana.classList.add('classe-nova', 'outra-classe')
console.log(buttonBacana.classList)

buttonBacana.classList.remove('classe-nova')
console.log(buttonBacana.classList)

console.log(buttonBacana.classList.contains('classe-nova'))
console.log(buttonBacana.classList.contains('blue-btns'))

// getAttribute

let emailInput = document.getElementById('emailInput')

console.log(emailInput.getAttribute('name'))

let link = document.querySelector('#link')
console.log(link.getAttribute('href'))

let linkCurriculo = document.getElementById('curriculo')
linkCurriculo.setAttribute('href', 'http://curriculo.com')
console.log(linkCurriculo.getAttribute('href'))

let imagem = document.querySelector('img')
imagem.removeAttribute('src')
imagem.setAttribute('src', 'https://miro.medium.com/v2/resize:fit:1400/1*i8-u-V8LTTbQwTeUwLI_BQ.gif')





