// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const perguntaAltura = Number(prompt("qual a altura?"))
 const perguntaLargura = Number(prompt("Qual e a largura?"))
 const multiplicacao = perguntaAltura * perguntaLargura
console.log(multiplicacao)
} 



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Qual o ana atual?"))
const anoDeNascimento = Number(prompt("Qual o ano do seu nascimento?"))
const subtracao = anoAtual - anoDeNascimento
console.log(subtracao)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura * altura)
console.log(imc)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const perguntaNome = prompt("Qual é o seu nome?")
  const perguntIdade = Number(prompt("Qual é a sua idade?"))
  const perguntaEmail = prompt("Qual é o seu email?")
  
  console.log(`Meu nome é ${perguntaNome}, tenho ${perguntIdade} anos, e o meu email é ${perguntaEmail}.` )

  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual é a sua primeira cor favorita?")
  const cor2 = prompt("Qual é a sua segunda cor favorita?")
  const cor3 = prompt("Qual é o sua terceira cor favorita?")
  const listaDecores = [cor1, cor2, cor3] 
  console.log(listaDecores)
  }

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return  string.toUpperCase()

}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return custo / valorIngresso 



}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let duasString = string1 >= string2

return duasString

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

return array.pop() 


}



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroElemento = array.shift()
const ultimoElemento = array.pop()
array.unshift(ultimoElemento)
array.push(primeiroElemento)
return array 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

return string1.toUpperCase() === string2.toUpperCase()

  
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}