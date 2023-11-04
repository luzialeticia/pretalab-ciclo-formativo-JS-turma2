/*
nome: Fulana
nome do meio: Ciclana
sobrenome: De Tal
email: fulana.detal@gmail.com
email da academia: fulana.detal@academia.com.br
idade: 30 anos
peso: 65.5kg
altura: 1.62m
fumante: não
bebe: sim
tempo que pratica atividades físicas: 2 anos
*/

const alunaAcademia = {
    nome: "Fulana",
    nomeDoMeio: "Ciclana",
    sobrenome: "De Tal",
    email: "fulana.detal@gmail.com",
    emailDaAcademia: "fulana.detal@academia.com.br",
    idade: 30,
    peso: 65.5,
    altura: 1.62,
    fumante: false,
    bebe: true,
    tempoPraticaAtividadesFisicas: 2,
    //nomeCompleto: `${this.nome} ${this.sobrenome}`
    nomeCompleto: function() { 
        return `${this.nome} ${this.nomeDoMeio} ${this.sobrenome}`
    },
}

//const nomeCompleto = `${alunaAcademia.nome} ${alunaAcademia.nomeDoMeio} ${alunaAcademia.sobrenome}`

console.log(alunaAcademia.nomeCompleto())
//console.log(nomeCompleto.length)

let emailAluna = alunaAcademia.emailDaAcademia
console.log(emailAluna)

let nomeUsuario = emailAluna.split('@', 1)
console.log(nomeUsuario)
