# Aula 04

Hoje nós vamos exercitar!

<p align="center">
    <img alt="Gif homem se exercitando" src="https://anamaria.uol.com.br/amp-stories/6-dicas-para-treinar-em-casa/assets/11.gif" width=200 />
</p>

#### 1. Quero imprimir a área e o perímetro de um retângulo.
<sub>Operadores aritméticos</sub>

Primeiro, vamos escrever nosso algoritmo em PT-BR, nossa receita de bolo
1. Como calcular a área de um retângulo:
    - base x altura
2. E o perímetro:
    - 2 X (base + altura)
2. Agora vamos codar essa receita. Como calcular a área de uma perímetro em JS?
---

#### 2. Crie uma variável chamada `diaDaSemana`. Utilizando if/else, implemente condicionais para que:
<sub>Estrutura Condicional</sub>
  
a. Se nossa variável for: "terça-feira", "quinta-feira" ou "sábado", o console.log imprima a seguinte mensagem:
  > Oba, mais um dia de aprendizado em JavaScript
  
b. Se for outro dia:  
  > “Hoje não temos aula. Sdds da prof e da Rê!”.

c. Se não for um dia válido:  
  > “Esse dia da semana não existe”.

💡 > Dica: Tente escrever o mesmo código usando a estutura `switch-case`.

---

#### 3. Vamos criar uma calculadora com as 4 operações básicas!
<sub>Estrutura Condicional e operadores aritméticos</sub>

- Crie uma variável que armazene a operação aritimética que vamos trabalhar.
- Criar as variáveis com os dois números que serão utilizados para a operação.
- Nossa calculadora deve imprimir a frase "A operação escolhida foi `operacao` e o resultado é `resultado` "

---

#### 4. Crie um programa que verifica se a pessoa está apta a votar, de acordo com as leis brasileiras
<sub>Estrutura Condicional e operadores lógicos</sub>

De acordo com as leis brasileirar:
- A partir dos 16 anos de idade, qualquer pessoa está apta a votar no Brasil.
- Com idades entre 18 e 70 toda pessoa brasileira é obrigada a votar.
- O voto é facultativo para pessoas de 16 e 17 anos e maiores de 70 anos.

De acordo com a legislação brasileira, imprima no console 3 opções de frases:
- "O voto é facultativo"
- "Pessoa não está apta a votar"
- "Pessoa é obrigada a votar"

💡 > Dica: Depois tente melhorar esse algoritmo. Pesquise outras regras para votar no Brasil (a pessoa ser alfabetizada, ser brasileira nata etc) e incremente no código.

---

#### 5. Você está num restaurante e quer comer alguma coisa no almoço. Então, você diz:
<sub>Operadores relacionais e estrutura condicional</sub>

 > Por favor, me veja uma feijoada **E** um suco de laranja”
 
Seria muito triste se você recebesse apenas a bebida ou só a comida, não é? 

Também não seria legal se recebêssemos a feijoada completa, mas a nossa bebida fosse um caldo de cana. **Porque nosso pedido era de que as duas condições fossem atendidas corretamente.**

Crie duas variáveis em JS, uma deve conter o prato e a outra a bebida. Quando o pedido vier certo, seu programa deve imprimir a mensagem: **"Muito grata pelo almoço!"** caso não seja o pedido, imprimir: **"Acho que houve um engano com meu pedido"**.

---

#### 6. Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico e atribua a ela um valor entre 1 e 100. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. 
<sub>Operadores relacionais e estrutura condicional</sub>

Para isso, considere as seguintes informações: 
* Se a nota for maior ou igual a 80, imprima "Parabéns, você faz parte do grupo das pessoas aprovadas!".
* Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera".
* Se a nota for menor que 60, imprima "Infelizmente, você reprovou." .

Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. Altere o valor da nota para verificar se as condições que você implementou funcionam.

---

#### 7. Utilize if/else para escrever um código que define três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false
<sub>operadores relacionais e estrutura condicional e  Operadores aritméticos</sub>

💡 > Dica: brinque com os valores, teste para números pares e ímpares.

---

#### 8. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
<sub>Estrutura Condicional</sub>

  Siga essas regras:
  ```
  Porcentagem >= 90 -> A
  Porcentagem >= 80 -> B
  Porcentagem >= 70 -> C 
  Porcentagem >= 60 -> D 
  Porcentagem >= 50 -> E
  Porcentagem < 50 -> F
  ```

> O código deve retornar uma mensagem de erro se a nota passada for menor que 0 ou maior que 100.

---