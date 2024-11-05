// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

let faturamentoDiario = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698
  },
  {
    dia: 3,
    valor: 26139.6134
  },
  {
    dia: 4,
    valor: 0.0
  },
  {
    dia: 5,
    valor: 0.0
  },
  {
		dia: 6,
		valor: 26742.6612
	},
	{
		dia: 7,
		valor: 0.0
	},
	{
		dia: 8,
		valor: 42889.2258
	},
	{
		dia: 9,
		valor: 46251.174
	},
	{
		dia: 10,
		valor: 11191.4722
	},
	{
		dia: 11,
		valor: 0.0
	},
	{
		dia: 12,
		valor: 0.0
	},
	{
		dia: 13,
		valor: 3847.4823
	},
	{
		dia: 14,
		valor: 373.7838
	},
	{
		dia: 15,
		valor: 2659.7563
	},
	{
		dia: 16,
		valor: 48924.2448
	},
	{
		dia: 17,
		valor: 18419.2614
	},
	{
		dia: 18,
		valor: 0.0
	},
	{
		dia: 19,
		valor: 0.0
	},
	{
		dia: 20,
		valor: 35240.1826
	},
	{
		dia: 21,
		valor: 43829.1667
	},
	{
		dia: 22,
		valor: 18235.6852
	},
	{
		dia: 23,
		valor: 4355.0662
	},
	{
		dia: 24,
		valor: 13327.1025
	},
	{
		dia: 25,
		valor: 0.0
	},
	{
		dia: 26,
		valor: 0.0
	},
	{
		dia: 27,
		valor: 25681.8318
	},
	{
		dia: 28,
		valor: 1718.1221
	},
	{
		dia: 29,
		valor: 13220.495
	},
	{
		dia: 30,
		valor: 8414.61
	}
]

//filtrar para não considerar os valores com 0
//fazer um map para percorrer o array e trazer o menor valor considerando a
//função Math.min
const menorValor = Math.min(...faturamentoDiario.filter(dia => dia.valor > 0).map(dia => dia.valor))

//A mesma lógica, apenas trocando o Math.max
const maiorValor = Math.max(...faturamentoDiario.filter(dia => dia.valor > 0).map(dia => dia.valor))

//antes de calcular a média, faço um filtro para retornar apenas os valores válidos
const valoresValidos = faturamentoDiario.filter(dia => dia.valor > 0)

//crio uma variável para armazenar a soma dos valores e faço um for para calcular
let soma = 0
for(let i = 0; i < valoresValidos.length; i++) {
  soma +=valoresValidos[i].valor
}

//calculo a media fazendo soma dividido pelo tamanho do meu array
const media = soma / valoresValidos.length

console.log(`Menor valor de faturamento do mês ${menorValor}`)
console.log(`Maior valor de faturamento do mês ${maiorValor}`)
console.log(valoresValidos)
console.log(`Média considerando apenas valores válidos: ${media.toFixed(2)}`)