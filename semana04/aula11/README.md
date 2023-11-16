# Aula 11

Slides para esta aula [AQUI](https://www.canva.com/design/DAFy20BoMGg/FTH7JNVxS6boB0XBJbTjXA/view?utm_content=DAFy20BoMGg&utm_campaign=designshare&utm_medium=link&utm_source=editor)

---

## Métodos de seleção de elementos

#### getElementsByTagName()
Traz uma coleção de todos elementos que contenham o nome da tag informada.

```javascript
let arrayH2 = document.getElementsByTagName('h2')
```

#### querySelectorAll()
Retorna um objeto representando os elementos do documento que correspondem ao seletor.

```javascript
let colecaoH2 = document.querySelectorAll('h2')
```

#### getElementById()
Esse método retorna o elemento que estiver contendo o nome do ID informado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

```javascript
let emailInput = document.getElementById('emailInput')
```

#### querySelector()
Esse método retorna qualquer elemento do DOM, como classes, tags e ID's.
Você apenas precisa deixar explicito se está chamando uma classe, um ID ou uma tag.

```javascript
let getInputId = document.querySelector('#textInput');
let getInputClass = document.querySelector('.email-input');
let getInputTag = document.querySelector('input');
```

#### getElementByClassName()
Esse método nos permite selecionar elementos do documento incluídos dentro do atributo class.
Ele recebe um único argumento de string, que pode conter vários identificadores separados por espaços.

---

## Modificando elementos

#### textContent()
Retorna o conteúdo de texto dos elementos.

```javascript
element.textContent

// podemos mudar o valor do texto:
element.textContent = "olá mundo"
```

#### innerHTML
Retorna o valor do elemento em HTML

```javascript
element.innerHTML

// podemos mudar o valor do HTML e até inserir novos elementos:
element.innerHTML = "<em>Olá</em> mundo"
```

#### innerText
Semelhante ao `textContent`, porém retorna o texto sem formatação.

```javascript
element.innerText

element.innerText = "olá mundo"
```

#### input.value
Retorna o valor do input selecionado

```javascript
element.value

//posso atribuir um valor
element.value = 'novo valor'
```
---

## Manipulando CSS
O DOM HTML permite que o JavaScript mude o estilo dos elementos HTML

```javascript
elemento.style.property = "novo estilo"
```

---

## Adicionar e remover classes do HTML manipulando o DOM
O `element.classList` é uma propriedade somente leitura que retorna uma coleção com as classes do elemento.

```javascript
elemento.classList;
```

A propriedade classList é somente leitura, no entanto, você pode modificá-la usando os métodos `add()` e `remove()`.

```javascript
element.classList.add('nova-class')
// pode adicionar mais de uma classe
element.classList.add('nova-class', 'outra-classe')

element.classList.remove('class-removida')
// pode remover mais de uma classe
element.classList.remove('class-removida', 'outra-classe')
```
obs: Se a classe a ser adicionada já existir, nada acontece. Apenas não será adicionada novamente.

`contains()` retorna um valor booleano, indicando se um elemento tem o nome da classe especificado. Valores possíveis:

- `true` - o elemento contém o nome da classe especificada
- `false` - o elemento não contém o nome da classe especificada

```javascript
elemento.classList.contains('classe');
```

---
## Alterando atributos HTML
Assim como modificamos o atributo (propriedade) de classe do nosso elemente usando o `.classList`, podemos modificar qualquer atributo dos nossos elementos HTML usando os métodos:

#### getAttribute()
Irá mostrar qual o valor do dado atributo no elemento escolhido:

```javascript
elemento.getAttribute('id');
```

#### setAttribute()
O primeiro parâmetro diz qual é o atributo que se quer adicionar, no segundo é dado o seu valor


```javascript
elemento.setAttribute('id', 'meu-elemento');
```

#### removeAttribute()
Remove o atributo do elemento

```javascript
elemento.removeAttribute('class');
```

---

## Eventos
<sub>[Ver também no MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)</sub>

Eventos são um conjunto de ações que são realizadas em um determinado elemento da página web, seja ele um texto, uma imagem, ou uma div, por exemplo. Muitas das interações do usuário que está visitando sua página com o conteúdo do seu site podem ser consideradas eventos.

#### Event Listener
É um manipulador e rastreador de eventos, onde é possível adicionar ou remover um evento sobre qualquer elemento. O Event Listener disponibiliza duas funções principais, são elas:

- addEvent - Adiciona uma função que será disparada quando ocorrer determinado evento no objeto.
- removeEvent - Remove um listener previamente adicionado em um objeto e retorna true em caso de sucesso.

```javascript
element.addEventListener(event, funcao())
//o 1o parâmetro é o evento que vc quer que seja observado
//o 2o parâmetro é uma função callback que determina uma ação que será feita no elemento qual determinado evento for executado.
```

