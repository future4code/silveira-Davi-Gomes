/*let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

a.  undefined
 b.  null
 c.  11
 d.  3
 e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 f.  9*/

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//SUBI NUM ÔNIBUS EM MIRROCOS 27

const nome = prompt("Digite o seu nome");
const email = prompt("Digite o seu email");
const emailCadastrado = `O e-mail ${email.trim()} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}!`

console.log(emailCadastrado)

const comidasFavoritas = [`frango`, `lasanha`, `bolo`, `pudim`, `churrasquinho`]
// index                     0          1        2         3          4            

console.log(comidasFavoritas)
console.log(`Essas são as minhas comidas preferida:
 
${comidasFavoritas[0]}
 ${comidasFavoritas[1]}
 ${comidasFavoritas[2]}
 ${comidasFavoritas[3]}
 ${comidasFavoritas[4]}`)

 comidasFavoritas[1] = prompt(`Qual a sua comida preferida?`)
 
 console.log(comidasFavoritas);

 let listaDeTarefas = []

 listaDeTarefas[0] = prompt(`Qual sua 1° tarefa do dia`)
 listaDeTarefas[1] = prompt(`Qual sua 2° tarefa do dia`)
 listaDeTarefas[2] = prompt(`Qual sua 3° tarefa do dia`)

 console.log(`minha lista de tarefas diarias:
 1 - ${listaDeTarefas[0]} 
 2 - ${listaDeTarefas[1]}
 3 - ${listaDeTarefas[2]}`);

let removerTarefa = prompt(`Qual tarefa voce ja concluiu?

1 - ${listaDeTarefas[0]} 
2 - ${listaDeTarefas[1]}
3 - ${listaDeTarefas[2]}`)
listaDeTarefas.splice(removerTarefa - 1, 1)
console.log(`Tarefas não concluidas:
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}`);

//desafio

const frase = prompt('Digite uma frase qualquer:');
const palavrasDaFrase = frase.split(' '); 

console.log(palavrasDaFrase);

// 2.
const frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa'];

console.log(frutas.indexOf('Abacaxi'), frutas.length);