# Aula 05

Slides para esta aula [AQUI](https://www.canva.com/design/DAFzI0DIJoI/pYu4Nys08MPvBJO-lS2SsQ/view?utm_content=DAFzI0DIJoI&utm_campaign=designshare&utm_medium=link&utm_source=editor)

---

### Estruturas condicionais
##### if-else

```javascript
let hora = 18;

if (hora < 12){
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}
```

##### switch-case

```javascript
let signo = 'Aquário';

switch (signo) {
  case 'Áries':
    console.log("De 21 março a 20 abril");
    break;
	case 'Touro':
    console.log("de 21 abril a 20 maio");
    break;
  case 'Gêmeos':
    console.log("de 21 maio a 20 junho");
    break;
  case 'Câncer':
    console.log("de 21 junho a 22 julho");
    break;
  case 'Leão':
    console.log("de 23 julho a 22 agosto");
    break;
  case 'Virgem':
    console.log("de 23 agosto a 22 setembro");
    break;
  default:
  	console.log("Signo não registrado");
    break;
}
```

<details>
  <summary>Crie um programa que receba 2 números, calcule a soma deles e em seguida verifique se essa soma é maior que 100.</summary>
</details>

<details>
  <summary>Crie um algoritmo que receba dois números e determine qual é o menor entre eles. Se os números forem iguais, mostre uma mensagem no console "Os números são iguais.</summary>
</details>

<details>
  <summary>Elabore um programa que receba uma string com dia da semana e devolva um número (1-7) correspondente ao dia da semana.</summary>
</details>