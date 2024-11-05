// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13
let soma = 0
let k = 0

for(k; k < indice; k++) {
  soma += k
  console.log(soma)
}

// executar no terminal node exercicio1.js
// o resultado será:
// 0
// 1
// 3
// 6
// 10
// 15
// 21
// 28
// 36
// 45
// 55
// 66
// 78