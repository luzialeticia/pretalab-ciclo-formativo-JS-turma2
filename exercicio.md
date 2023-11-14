#### 2. Sem rodar os códigos, tente analisar e identificar quais trechos de código terá como saída no console 'Folia' com base nas variáveis declaradas.
  <sub>Conteúdos abordados: operadores relacionais e estrutura condicional</sub>

  ```javascript
  const a = null;
  const b = 20;
  const c = true;
  const d = '';
  ```

  Trecho 1:
  ```javascript
  if (b === 20 && c != false && d == 0) {
     console.log('Folia')
  } else {
     console.log('Descanso')
  }
  ```

  Trecho 2:
  ```javascript
  if (a == 0) {
     console.log('Folia')
  } else {
     console.log('Descanso')
  }
  ```

  Trecho 3:
  ```javascript
  if (d) {
     console.log('Folia')
  } else {
     console.log('Descanso')
  }
  ```

  Trecho 4:
  ```javascript
  if (b == '20') {
     console.log('Folia')
  } else {
     console.log('Descanso')
  }
  ```
---