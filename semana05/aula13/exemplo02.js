const academias = [
    {
        nome: 'Academia 1',
        alunes: 38,
        localidade: 'SP'
    },
    {
        nome: 'Academia 2',
        alunes: 27,
        localidade: 'PE'
    },
    {
        nome: 'Academia 3',
        alunes: 40,
        localidade: 'PA'
    },
    {
        nome: 'Academia 4',
        alunes: 17,
        localidade: 'PE'
    },
    {
        nome: 'Academia 5',
        alunes: 41,
        localidade: 'SP'
    },
    {
        nome: 'Academia 6',
        alunes: 32,
        localidade: 'RJ',

        somaAlune: function() {
            alunes+1
        }
    },
]

const academiasMap = academias.map(item => {
    return {
        nome: item.nome,
        localidade: item.localidade
    }
})

console.log(academiasMap)