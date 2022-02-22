// exercicio 1. interpretação
// a)ele divide o numero que o usuario colocar, e testa se o numero e divisivel por dois ou não
// b)numeros pares
// c) numeros impares

// 2.
// a)para automatizar algumas tarefas de um supermercado
// b)("O preço da fruta ", "Maçã", " é ", "R$ ", 2.25)
// c)o valor seria 5

// 3.
// a)pede para o usuario um numero e trasnforma de string para number
// b)se o usuario colocar 10 ira aparecer que o numero passou no teste, ja se ele colocar 
// -10 ela não é exibida
// c)sim, me diz que 'mensagem' não foi definida

// exercícios de escrita

// 1.

    const mensagemUsuario = prompt("Qual a sua idade?")
    const idadeUsuario = Number(mensagemUsuario)
if(idadeUsuario >= 18 ){
    console.log("você pode dirigir.")
}else{
    console.log("você não pode dirigir.")
}

// 2. 


const turnoAluno = prompt('Qual o turno que você estuda? Responda: (M) para matutino, (V) para vespertino e (N) para noturno').toUpperCase()

if(turnoAluno === "M"){
    console.log("Bom dia!")

}else if (turnoAluno === "V"){
    console.log("Boa tarde!")
}else if (turnoAluno ==="N"){
    console.log("Boa noite!")
}


// 3.


const turnoAluno2 = prompt('Qual o turno que você estuda? Responda: (M) para matutino, (V) para vespertino e (N) para noturno').toUpperCase()
let turnoSwitch
switch(turnoAluno2){
case "M":
    console.log("Bom dia!")
    break
case "V":
    console.log("Boa tarde!")
    break
case "N":
    console.log("Boa noite!")
    default:
        console.log("Você não inseriu a letra imformada.")
      break


}

// 4.


const generoFilme = prompt('Qual é o gênero do filme?')
const precoIngresso = Number(prompt('Qual é o preço do ingresso?'))

if (generoFilme === 'fantasia' && precoIngresso < 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}