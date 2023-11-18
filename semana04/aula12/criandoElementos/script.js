// document.createElement(nomeDaTag);
// elemento.appendChild(filho);

// primeiro momento da função
function insertion(elemento, id, texto){
    // . ou #

    const elementoNovo = document.createElement(elemento)
    const elementoExistente = document.querySelector(`#${id}`)

    elementoNovo.innerText = texto
    
    elementoExistente.appendChild(elementoNovo)
}

// segundo momento da função
insertion('h1', "texto", "Fui criado com Javascript")