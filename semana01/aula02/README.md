# Aula 02

Slides para esta aula [AQUI](https://www.canva.com/design/DAFyXgYlRXc/VR70HoJZh4-DICtrnfoiSw/view?utm_content=DAFyXgYlRXc&utm_campaign=designshare&utm_medium=link&utm_source=editor)

---

E continuando...

### Concatenação

1. Ao invés do mundo, vamos fazer o Javascript dar um "Olá!" a queride que está entre a cadeira e o computador.
    - Na mesma pasta, crie o arquivo `ola-pessoa.js`
    - Crie uma variável chamada `pessoa` e nela armazene o nome da pessoa a quem você quer dar "Olá"
    - Escreva o código abaixo e em seguida salve seu arquivo 
      ```javascript
        console.log('Olá, ' + pessoa);
      ```
    - Abra o terminal e rode seu código para ver o JS dando Olá pra pessoa :)

2. Vamos concatenar com Template string?
    - Escreva o código abaixo e em seguida salve seu arquivo 
      ```javascript
        console.log(`Olá, ${pessoa}`);
      ```

3. Pratiquem em casa!
    - Em uma nova pasta e novo arquivo, concatene as variáveis que criamos até aqui. Do jeito que você quiser.
    - Em um novo arquivo, crie as seguintes variáveis e em seguida use a criatividade para concatená-las, formando uma frase: primeiro nome; último nome; ano de nascimento; cor preferida; hobby; um sentimento.

---

## Tipos de dados

1. Number
    ```javascript
    const idade = 32
    const altura = 1.57
    const saldoBancario = -30.00
    ```

2. String
    ```javascript
    const nome = "Renata"
    let email = "renata2023@pretalab.com"
    ```

3. Boolean
    ```javascript
    let gostoDeJs = true
    const souBrasileira = true
    const souPernambucana = false
    ```

4. Objeto
    ```javascript
    const professora = {
        nome: "Letícia",
        idade: 32,
        cidade: "Recife",
        brasileira: true,
        pernambucana: false
    }
    ```
    - Se eu quiser saber só uma das informações sobre a professora?
        ```javascript
        console.log(professora.nome)
        ```

5. Null
    ```javascript
    let souBonita = null
    ```

6. Undefined
    ```javascript
    let aluna
    console.log(aluna)
    ```

### Manipulação de variáveis

Vamos brincar com as variáveis que criamos até aqui!

1. Quero ver o tamanho da string que criei:
    ```javascript
    const nomeCompleto = "Letícia Luzia da Silva Furtado"
    console.log(nomeCompleto.length)
    ```
    OBS.: Os espaços também são considerados caracteres
    <br>

2. Separar informações de uma string
    ```javascript
    let email = "leticialuzia@gmail.com"
    console.log(email.split('@', 1))
    ```
<p align="center">
    <img alt="Gif da Gretchen feliz" src="https://www.afinca.org.br/wp-content/uploads/2017/10/atencao.gif" width=100 />
</p>

    Cada caractere é identificado com uma numeração dentro da memória!
    E essa númeração SEMPRE começa em 0

3. Quero substituir um trecho do meu nome. Eu posso?
    ```javascript
    const novoNome = nomeCompleto.replace("Furtado", "Andrade")
    console.log(novoNome)
    ```

4. Eita! Vou precisar tirar meu sobrenome, como eu faço?
    ```javascript
    const cortaSobrenome = novoNome.slice(0, 23)
    console.log(cortaSobrenome)
    ```

5. E se eu quiser pegar só a primeira parte do meu e-mail, antes do `@`, de outra forma?
    ```javascript
    let email = "leticialuzia@gmail.com"
    console.log(email.substr(0, 12))
    ```