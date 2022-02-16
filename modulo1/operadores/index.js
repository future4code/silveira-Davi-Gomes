/*ex.1 
a.  false
b.  false
c.  true
d.  boolean*/

/*ex.2 o prompt recebe o numero como string no caso e so o number antes do prompt.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

/*exercicio de escrita de codigo 1.*/

const idade = Number(prompt("digite sua idade"))

const idadeDoAmigo = Number(prompt("qual e a idade do seu melhor amigo?"))

console.log("idade do seu amigo e", idadeDoAmigo)
console.log("sua idade e maior que a do amigo?", idade >= idadeDoAmigo)
console.log("diferença de idade", idade - idadeDoAmigo)

/*ex.2
eu notei que quando eu coloco qualquer numero par o resto e sempre (0), 
e quando eu coloco um numero impar o resto e sempre (1) */

let numeroPar = Number(prompt("insira um numero PAR"))

console.log("resto da divisao", numeroPar % 2 )

/*exe.3*/

let idadeAnos = Number(prompt("qual sua idade"))
const meses = 12 
const dias = 365 
const horas = 24
let  idadeMeses  = meses *  idadeAnos
let  idadeDias  = idadeAnos * dias
let  idadeHoras  = horas * dias * idadeAnos

console.log("Sua idade é de", idadeAnos, "anos")
console.log("Sua idade em meses é de", idadeMeses, "meses")
console.log("Sua idade em dias é de aproximadamente" , idadeDias, "dias")
console.log("Sua idade em horas é de aproximadamente", idadeHoras, "horas")

/*ex.4*/

let numero1 = Number(prompt("escolha o primeiro numero"))
let numero2 = Number(prompt("escolha o segundo numero"))

const primeiro = numero1 > numero2
const segundo = numero1 === numero2
const terceiro = numero1 % numero2
const quarto = numero2 % numero1

console.log("o primeiro é maior que o segundo?", primeiro)
console.log("o primeiro é igual ao segundo?", segundo)
console.log("o primeiro é divisível pelo segundo?", terceiro === 0)
console.log("o segundo é divísível pelo segundo?", quarto === 0)
