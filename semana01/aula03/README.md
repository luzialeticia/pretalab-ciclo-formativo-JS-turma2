# Aula 03

Hoje nós vamos exercitar!

<p align="center">
    <img alt="Gif homem se exercitando" src="https://anamaria.uol.com.br/amp-stories/6-dicas-para-treinar-em-casa/assets/11.gif" width=200 />
</p>

#### 1. Bora criar variáveis!
<sub>Variáveis e tipos de dado</sub>

```javascript
const nome = "Letícia";
const sobrenome = "Luzia";
let idade = 32;
const brasileira = true;
let estaEmpregada = true;
let tempoDeTrabalho = 3;
let casada = false;
console.log(nome)
console.log(sobrenome)
console.log(idade)

//Em forma de objeto:
const professora = {
    nome = "Letícia";
    sobrenome = "Luzia";
    idade = 32;
    brasileira = true;
    estaEmpregada = true;
    tempoDeTrabalho = 3;
    casada = false;
}
```

Crie uma constante chamada **meuNome** e atribua a ela o seu nome.
  * Crie uma constante chamada **cidadeNatal** e atribua a ela a sua cidade de nascimento.
  * Crie uma constante chamada **anoDeNascimento** e atribua a ela o ano em que você nasceu.
  * Crie uma variável chamada **profissão** e atribua a ela a sua profissão.
  * Utilize o console.log para imprimir as constantes e variáveis que você criou.
  * Altere o valor da variável profissão para **desenvolvedora** e tente exibir no console novamente, observe o que acontece.
  * Atribua um novo valor à constante **cidadeNatal** e tente exibir no console novamente, observe o que acontece.
    > Você consegue entender e explicar, com suas palavras, o motivo do erro?

  * Crie um objeto com os dados do Estado do Brasil em que você vive, ou que você nasceu. Exemplos de informações que podemos adicionar: Nome, Capital, Região do Brasil,Principal ponto turístico, há quanto tempo você vive nele? O clima é quente? É frio? Tem praia? Fique a vontade para adicionar outras informações pra fazer a gente ficar com mais vontade de conhecer sua terra :).
      
  ---

  #### 2. Abaixo iremos ver algumas declarações de constantes e variáveis, observe se as declarações estão de acordo com a sintaxe do Javascript. Caso não esteja, corrija, deixando-a válida.
  <sub>Variáveis e padrões de nomenclatura</sub>

    a. algum_nome: Mariana
    b. var Nome = 32; 
    c. const: idade 40;
    d. let profissão = 'desenvolvedor';
---

#### 3. Praticando a concatenação
<sub>Concatenação</sub>

```javascript
const meuPet = "Léia";
const especie = "gata";
let idade = 2;
let tempoComVoce = 1.7;
const vacinado = true;
const castrado = true;
const comportado = false;

// OU OBJETO
const meuPet = {
    nome: "Léia",
    especia: "gata",
    idade: 2,
    tempoComigo: 1.7,
    vacinado: true,
    castrado: true,
    comportado: false
}

/*
Léia é uma linda gata de 2 aninhos de idade. Está com sua tutora há 1.7 anos. Léia adora fazer bagunça e receber carinho no pescoço.
*/
```

* Sua vez de apresentar seu pet pra gente. Cria os dados dele e depois um textinho de apresentação concatenando as informações.
    * Bora tentar concatenar usando as propriedades do objeto?
---
#### 4. Manipulando nossas strings
<sub>Manipulação de variáveis</sub>

* Fomos contratadas para desenvolver um aplicativo para uma academia. No aplicativo, precisamos manipular as informações das alunas de acordo com algumas necessidades.

```
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
```

* Crie as variáveis com as infos da Fulana de tal.
* Crie uma noma variável chamada `nomeCompleto` que nada mais é que a concatenação do nome e sobrenome da nossa aluna.
* Retorne a quantidade de caracteres total (incluindo espaços) desse nome completo.
* Existe uma informação importante na nossa academia que precisamos extrair para reconhecer a aluna: o nome de usuário. Essa informação está presente no email criado pela academia, antes do `@`
```
fulana.detal@academia.com.br
```
Retorne apenas esse nome de usuário
* Nossa aluna trocou o sobrenome, então troque no nome completo.
* E se ela só retirou o sobrenome, ficando só com o nome do meio? Como faz?
* Com toda essa mudança de nome, precisamos mudar também o email dela.

---
E aí? Exercitou? Cansou? Bora manter o ritmo!
<p align="center">
    <img alt="Gif personagens se exercitando" src="https://i.giphy.com/xThuWwRYOZdfcODqVy.gif" width=400 />
</p>