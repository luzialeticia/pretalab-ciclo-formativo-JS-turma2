//Métodos de seleção de elementos - HTML/DOM

// getElementsByTagName

let arrayH2 = document.getElementsByTagName('h2')
console.log(arrayH2)

for(let i = 0; i < arrayH2.length; i++) {
    console.log(arrayH2[i])
}

// querySelectorAll
let colecaoH2 = document.querySelectorAll('h2')
// console.log(colecaoH2)

// getElementById()
let emailInput = document.getElementById('emailInput')
console.log(emailInput)

// let email = 'leticia@email.com'
let email = document.getElementById('emailInput')
