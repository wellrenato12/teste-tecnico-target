// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// 0,1,1,2,3,5,8,13,21,34,55,89

function calcFibonnachi(n) {
  let f = 1
  let varAux = null
  let result = [0]
  let isTrue = true

  while(isTrue) {
    varAux = result[result.length - 1]
    result.push(f)
    f += varAux
    console.log(f)

    if(f === n) {
      isTrue = false
      console.log(`O número ${n} pertence ao grupo fibonnachi!`)
      return
    }

    if(f > n) {
      isTrue = false
      console.log(`O número ${n} não pertence ao grupo fibonnachi!`)
      return
    }
  }
}

calcFibonnachi(89)

//Informe o número que deseja executar na função calcFibonnachi e
//execute node exercicio2.js, o programa vai verificar se o número
//existe, caso esse número seja ultrapassado pelo fibonnachi o
//programa encerra e o resultado é falso 