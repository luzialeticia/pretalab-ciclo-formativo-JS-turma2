/*
Léia é uma linda gata de 2 aninhos de idade.
Está com sua tutora há 1.7 anos.
Léia adora fazer bagunça e receber carinho no pescoço.
*/

const meuPet = {
    nome: "Léia",
    especie: "gata",
    idade: 2,
    tempoAdocaoEmMeses: 19,
    vacinado: true,
    castrada: true,
    comportado: false,
    observacao: "adora fazer bagunça e receber carinho no pescoço"
}

console.log(`${meuPet.nome} é uma linda ${meuPet.especie} de ${meuPet.idade} aninhos de idade. Está com sua tutora há ${meuPet.tempoAdocaoEmMeses} meses. ${meuPet.nome} ${meuPet.observacao}.`)