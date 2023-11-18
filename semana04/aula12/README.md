# Aula 12

Hoje nós vamos exercitar!

<p align="center">
    <img alt="Gif homem se exercitando" src="https://anamaria.uol.com.br/amp-stories/6-dicas-para-treinar-em-casa/assets/11.gif" width=200 />
</p>

#### 1. Liga e desliga

1. selecione a imagem do documento.
2. selecione o body do documento. 
3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.

---

#### 2. Biscoito da sorte
<sub>Ver sobre: [Math.floor](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) e [Math.random](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)</sub>
  
1. selecione a imagem do biscoito da sorte.
2. selecione o parágrafo que receberá a mensagem da sorte.
3. crie a função "fraseDaSorte", essa função deve alterar o texto do parágrafo para uma frase randômica do array fornecido.

---

#### 3. Criando elementos
<sub>Ver sobre [createElement](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement) e [appendChild](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)</sub>
A função insertion cria elementos no DOM e para isso recebe três argumentos, o elemento, o ID de um elemento já existente no seu HTML e o texto que será inserido no elemento criado. 

```
function insertion(el,id,text){
    //seu código aqui
}

//a função de criar um parágrafo dentro do elemento com ID "conteudo" e com o texto "Fui criado com Javascript"
insertion('p', "conteudo", "Fui criado com Javascript")
```

---

#### 4. Soma de valores
<sub>Ver sobre: [prompt](https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt) e [alert](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert)</sub>
Vamos pedir para nosso usuário entrar com dois valores distintos e somá-los.

- Retornaremos na tela o resultado da soma entre os dois números.
- Se um dos valores não for um número válido, retornamos para o usuário a mensagem `Por favor digite um número`

---