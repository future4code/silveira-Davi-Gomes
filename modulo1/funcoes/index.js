// resposta exercicio de interpretação .1
// a).
// 10
// 50

// b).

// function minhaFuncao(variavel) {

//     return variavel * 5

//         (minhaFuncao(2))
//         (minhaFuncao(10))

// }
// Ao retirar o console.log de ambas chamada da função não irá imprimir nada no console, apenas irá executar a
// função e nada será impresso.

// 2. a)A função pega o texto inserido pelo usuário, transforma todas as letras minúsculas e verifica se contém a palavra "cenoura"
// dentro do texto. ela retorna true se tiver a palavra "cenoura" ou o que existe
// conjunto de caracteres no texto e false para se não existir.


// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// b). todas vão dar true e mesmo que seja escrita em maiusculo seram formatadas em minusculo

// exercicio de escrita 1.

// a).

 function semParametro() {
     console.log('Eu sou Davi, tenho 22 anos, moro no rio de janeiro e sou estudante.')

 }

 semParametro()

// b).
  function comParametro(nome, idade, cidade ,profissao) {
  let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
  console.log(frase)
  return frase

  }

  comParametro("Davi", "22", "rio de janeiro", "estudante")

// // 2.
// a).

 function somaDosNumeros(numero1, numero2) {
    let soma = numero1 + numero2
     console.log(soma)
     return soma
 }

 somaDosNumeros(2383, 9239)

// b).

 function booleano(numero3, numero4) {
     let maiorOuIgual = numero3 >= numero4
     console.log(maiorOuIgual)
     return (maiorOuIgual)
 }
 booleano(2632, 8723)

 // c).

 function parOuNao(num1) {
    let par = (num1 % 2)
     console.log(par)
     return (par)

 }
 parOuNao(384)

// d).
 function mensagem(msn) {

     let tamanho = msn.length
     let maiuscula = msn.toUpperCase()
     let resposta = console.log(`${tamanho}, ${maiuscula}`)
 return resposta
 }

 mensagem(`eu estou aprendendo bastante no curso da labenu.`)

// exercicio 3.
// a).

 function soma(numeroA, numeroB) {
     let soma = numeroA + numeroB
  console.log(`soma ${soma}` )
  return (soma)

 }

  function subtracão(numeroA, numeroB) {
     let subtracao = numeroA - numeroB
  console.log(`subtracao ${subtracao}`)
   return subtracao
 }

  function multiplicaçãoo(numeroA, numeroB) {
  let multiplicacao = (numeroA*numeroB)
  console.log(`multiplicação ${multiplicacao}`)
 return multiplicacao
 }

  function divisão(numeroA, numeroB){
  let divisão = (numeroA/numeroB)
  console.log(`divisão ${divisão}`)
  return divisão

 }
 const numeroA = Number(prompt("insira o primeiro numero:"))
 const numeroB = Number(prompt("insira o segundo numero:"))

 console.log(`numeros inseridos: ${numeroA} e ${numeroB}`)

 
 multiplicaçãoo(numeroA, numeroB)
 divisão(numeroA, numeroB)

// Desafios

// Exercício 1
//a)
const funcaoArrow = (variavel) => {
    console.log(variavel)
}

funcaoArrow("Murilo Terenciani Carolino")

//b)
const resultadoSoma = (number1, number2) => {
    let contaSoma = (number1+number2)
    funcaoArrow(contaSoma)
}

resultadoSoma(5, 2)

// Exercício 2
function pitagoras(catetoA, catetoB) {
    const hipotenusa = (((catetoA**2)+(catetoB**2))**(1/2))
    return hipotenusa
}

const valorHipotenusa = pitagoras(3, 4)
console.log(valorHipotenusa)
 