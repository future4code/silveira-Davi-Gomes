// exercio de interpretação 
//1.
//  O código está fazendo um laço começando do número 0 e passando para a condição de enquanto esse número for menor que 5 o laço não finaliza, 
// então para cada valor entre 0 e 4, o laço executa o código dentro do bloco, e incrementa +1 para o número, executando uma variável que vai
// receber o número do laço, sempre e acrescentado do número anterior, ou seja, somando os valores de 0 a 4, em cada interação somando o anterior.
// O resultado impresso no console vai ser igual a 10.

// 2.
// A) numeros maiores que 18 [19,21,23,25,27, 30]
// b).

// 3.ele ira imprimir 4 linhas
// *
// **
// ***
// ****

// exercicio de escrita
// 1.

const nomeDosPet = []
const pet = Number(prompt("quantos animais de estimação você tem?")) 
 if (pet === 0){
 console.log("Que pena! Você pode adotar um pet")
 }
 else if (pet > 0){
for(let i =1; i <= pet; i++){
 const petNome = prompt(`Digite o nome do seu pet numero ${i} `)
 nomeDosPet.push(petNome)
 }
console.log(nomeDosPet)

 }































