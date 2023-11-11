const tabuada = (numero) => {
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    const multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // multiplicadores.length = 10
    // index identifica cada um dos itens
    // index sempre 1 valor abaixo do length
    // multiplicadores[0]

    for(let index = 0; index < multiplicadores.length ; index++) {
        console.log(numero*multiplicadores[index])
    }
}

// const tabuada = (numero) => {
//     // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//         const multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
//         for(let i = 1; i <= multiplicadores.length ;i++) {
//             numero*i
//         }
//     }

// console.log(tabuada(9))

tabuada(9)