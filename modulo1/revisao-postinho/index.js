
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
   return ` no comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade (1,2));
// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b){
    return `no comparador de maioi ou igual ${a} > ${b} é ${a >  b} `
}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= true
// b-) 1=='1'= false
// c-) 'a'==='b'= true
// d-) 'b'>'a'= false
// e-) 0!==null= false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     const usuario = []
// //  Sua lógica aqui
// const nomeDoUsuario = prompt("Qual o seu nome?");
// const anoDeNascimento = Number(prompt("Qual o ano do seu nascimento?"));
// const senhaDoUsuario = prompt("Digite a sua senha:");
// const nacionalidade = prompt("Qual a sua nascionalidade?");
// const idade = 2022 - anoDeNascimento
// if(idade < 18){
//     return "erro no cadastro, usuario e menor de idade."
// }
// if(senhaDoUsuario.length < 6){
// return "erro no cadastro, sua senha precisa conter 6 caracteres."
// }
// if(nacionalidade !== "brasileira" ){
// return "erro no cadastro"
// }
// const pessoa = {
// nomeDoUsuario:nomeDoUsuario,
// anoDeNascimento:anoDeNascimento,
// senhaDoUsuario:senhaDoUsuario,
// nascionalidade:nacionalidade,
// }
// usuario.push(pessoa)
// return usuario
// } 
// console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
const senhaUsuario = prompt("digite a sua senha.")


if( login === senhaUsuario){
return "usuario logado"
}
 else {login !== senhaUsuario}{
     return "senha invalida"
}



}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui
const nomeUsuario = prompt("Qual o seu nome?")
let vacina = prompt("Qual o nome da vacina que vc tomou?")
let tempo = ""
let data = ""
if(vacina){
    
}
}




console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());