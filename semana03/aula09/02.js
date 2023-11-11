function calcularMedia(nota1, nota2, nota3, nota4) {
    const media = (nota1+nota2+nota3+nota4)/4
    
    if(media < 6) {
        return `Sua media e ${media}. Voce foi reprovada`
    } else  {
        return `Sua media e ${media}. Parabens voce foi aprovada!`
    }
}

// Fazer armazenando a frase numa variavel
// Refatorar para arrow function

console.log(calcularMedia(6, 7, 5, 9))
