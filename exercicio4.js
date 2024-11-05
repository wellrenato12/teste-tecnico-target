// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

// Faturamento mensal por estado
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Calcular o faturamento total
const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Calcular e exibir o percentual de cada estado
for (const estado in faturamentoPorEstado) {
  const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
  console.log(`O percentual de faturamento de ${estado} é: ${percentual.toFixed(2)}%`);
}