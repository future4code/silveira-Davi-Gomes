
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
const cadastro = () => {
    const usuario = [];
    let nomeDoUsuario = prompt("Digite seu Nome:");
    let anoDeNascimento = +prompt("Digite seu ano de nascimento:");
    let senhaDoUsuario = prompt("Digite sua senha:");
    let nacionalidade = prompt("Qual a sua nacionalidade?");
    if (anoDeNascimento < 2004 && senhaDoUsuario.length >= 6 && nacionalidade == "brasileiro") {
    usuario.push(nomeDoUsuario);
    usuario.push(anoDeNascimento);
    usuario.push(senhaDoUsuario);
    usuario.push(nacionalidade);
    console.log(`Parabéns você foi cadastrado!`);
    } else {
        console.log(`Infelizmente você não pode realizar o seu cadastro.`)
    }
}
console.log(cadastro());
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
const nomeUsuario = prompt("Qual o seu nome?");
const vacina = prompt("Qual o nome da vacina que vc tomou?");
const coronavac = 28;
const astrazenica = 90;
const pfizer = 90;
let tempo =""
let data = ""

if(vacina === "coronavac"){
    return `Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${coronavac} dias. Compareça no posto na data 12/04/2020.`
}

if(vacina === "astrazenica"){
    return `Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${astrazenica} dias. Compareça no posto na data 13/06/2022.` 
}
if(vacina === "pfizer")
return `Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${pfizer} dias. Compareça no posto na data 13/06/2022.` 
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

    for(let pessoa of usuarios){
        if(pessoa.nome === nomeDoUsuario){
            pessoa.imunizacao = "completa"
        }
    }
    
return usuarios

}
// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for(let pessoa of usuarios){
    if(pessoa.imunizacao === "incompleta"){
        console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
    
        } 
       
    }
}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    let pessoa = {}
    let nomeDoUsuario = prompt("Digite seu Nome:");
    let anoDeNascimento = +prompt("Digite seu ano de nascimento:");
    let senhaDoUsuario = prompt("Digite sua senha:");
    let nacionalidade = prompt("Qual a sua nacionalidade?");
    if (anoDeNascimento < 2004 && senhaDoUsuario.length >= 6 && nacionalidade == "brasileiro") {
        pessoa = {
            nome : nomeDoUsuario,
            ano : anoDeNascimento,
            senha : senhaDoUsuario,
            nacionalidade : nacionalidade

        }
    console.log(`Parabéns você foi cadastrado!`);
    }  {
        console.log(`Infelizmente você não pode realizar o seu cadastro.`)
    }
   usuarios.push(pessoa)
   return usuarios
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    // sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
let vacina = prompt("qual vacina você tomou?")
let imunizacao = "incompleta"
usuarios[usuarios.length-1] = {
    ...usuarios[usuarios.length-1],
    vacina: vacina,
    imunizacao: imunizacao

}
return usuarios

}
console.log(primeiraDoseDesafio())

const segundaDoseDesafio = (nomeDoUsuario) => {
 
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
     const vacinaIncompleta = usuarios.filter((pessoa)=>{
         return pessoa.imunizacao === "incompleta"
        
     })
    const mensagemIncompleta = vacinaIncompleta.map((pessoa)=>{
        return `ola ${pessoa.nome}!sua imunizaçao esta incompleta, por favor volte ao postinho para tomar a segunda dose.`
    
    })
        return mensagemIncompleta
    }
     
console.log(avisoAosAtrasadosDesafio(usuarios));
