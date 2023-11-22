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
        localidade: 'RJ'
    },
]

// academias.localidade == 'SP'

// const callbackFilter = item => item.localidade === "SP"

const academiasSP = academias.filter(item => item.localidade === "SP")

console.log(academiasSP)