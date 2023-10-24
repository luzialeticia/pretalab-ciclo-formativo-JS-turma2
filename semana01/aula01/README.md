# Aula 01

Slides para esta aula [AQUI](https://www.canva.com/design/DAFyMRMyIVo/0_URHpGDlPC5CTNSuOnJsg/view?utm_content=DAFyMRMyIVo&utm_campaign=designshare&utm_medium=link&utm_source=editor)

## Preparar ambiente

1. Vamos começar baixando e instalando o [Node](https://nodejs.org/en)
  <p align="center">
    <img alt="Print do site de instalação do node" src="/assets/node-print.png" width=400 />
  </p>

  Iremos baixar a 1ª opção, essa do lado esquerdo __LTS__.

2. Depois de finalizada a instalação, abra o terminal e digite `node --version` e dê o enter. Algo parecido com a imagem abaixo deve aparecer no seu terminal. A numeração que aparece no seu terminal não precisa ser idêntica a da professora.
  <p align="center">
    <img alt="Print da resposta do terminal" src="/assets/terminal-print.png" width=400 />
  </p>

3. Agora mãos na massa! Vamos começar a codar \o/
    - Abra seu VSCode
    - Crie o arquivo `ola-mundo.js`
    - Escreva o código abaixo e em seguida salve seu arquivo 
      ```javascript
        console.log('Olá Mundo!');
      ```

4. Hora de rodar nosso código
    - Abra o terminal do Visual Studio Code
    - Digite o seguinte comando: `node ola-mundo.js`

UHUUUULLLL!!! Já estamos codando em Javascript \o/
  <p align="center">
    <img alt="Gif da Gretchen feliz" src="https://media.tenor.com/hzQ6Hw6tfkcAAAAd/gretchen-feliz.gif" width=400 />
  </p>

---

## Variáveis

1. Vamos criar variáveis!
    - Na mesma pasta em que criamos o `ola-mundo.js`, vamos criar o `variaveis.js`
    -  Crie 3 variáveis e mostre no console o valor salvo nelas
    - Declare e insira os valores nas seguintes variáveis ou constantes: Nome do país, Pontos turísticos, Capital do país e Quantidade de estados

````
Também é possível declarar muitas variáveis em uma declaração:
let pessoa = "Letícia", idade = "32", signo = "Aquário";
````

### Concatenação

2. Agora, ao invés do mundo, vamos fazer o Javascript dar um "Olá!" a queride que está entre a cadeira e o computador.
    - Na mesma pasta, crie o arquivo `ola-pessoa.js`
    - Crie uma variável chamada `pessoa` e nela armazene o nome da pessoa a quem você quer dar "Olá"
    - Escreva o código abaixo e em seguida salve seu arquivo 
      ```javascript
        console.log('Olá, ' + pessoa);
      ```
    - Abra o terminal e rode seu código para ver o JS dando Olá pra pessoa :)

3. Vamos concatenar com Template string?
    - Escreva o código abaixo e em seguida salve seu arquivo 
      ```javascript
        console.log(`Olá, ${pessoa}`);
      ```

4. Pratiquem em casa!
    - Em uma nova pasta e novo arquivo, concatene as variáveis que criamos até aqui. Do jeito que você quiser.
    - Em um novo arquivo, crie as seguintes variáveis e em seguida use a criatividade para concatená-las, formando uma frase: primeiro nome; último nome; ano de nascimento; cor preferida; hobby; um sentimento.