// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// Função para inverter a string
function inverterString(s) {
  let stringInvertida = ""; // String vazia para armazenar a string invertida
  for (let i = s.length - 1; i >= 0; i--) { // Loop de trás para frente
    stringInvertida += s[i]; // Adiciona cada caractere à nova string
  }
  return stringInvertida; // Retorna a string invertida
}

// Chamando a função e exibindo o resultado
const resultado = inverterString("Exemplo de string para inverter");
console.log(resultado);