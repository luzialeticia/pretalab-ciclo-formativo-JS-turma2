// retornar só imagem e nome do pokemon
// ES5 ES6 - EcmaScript
// assert with
// import data from './data.json' with {type: 'json'};
// import classe from 'arquivo.js';

import data from './data.json' assert {type: 'json'};

// map(callback)
// array.map(callback(item))

// nome e imagem
// criar os elementos que vão exibir imagem e nome
// pokemon[0].nome 

const mapeandoPokemon = (elemento) => {
// img
// span
// div
    let div = document.createElement('div')
    let imagemPokemon = document.createElement('img')
    let nomePokemon = document.createElement('span')
//<div></div>
//<img src="dfbfdh.jpg" alt="Bulbassauro">
//<span></span>

    imagemPokemon.setAttribute('src', elemento.img)
    imagemPokemon.setAttribute('alt', elemento.name)

    nomePokemon.textContent = elemento.name
    document.body.appendChild(div)
    div.appendChild(imagemPokemon)
    div.appendChild(nomePokemon)
}

data.pokemon.map(mapeandoPokemon)