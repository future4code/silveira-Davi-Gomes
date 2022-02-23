// exercicio de imterpretaçao 1.

// A)

// Matheus Nachtergaele
// Virginia Cavendish
// {canal: 'Globo', horario: '14h'}

// 2.A)

// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// {nome: 'Jubo', idade: 3, raca: 'SRD'}

// B)
// conseguimos realizar uma cópia de um objeto

// 3.A)
// false
//  undefined

// B)
// porque aultura não foi definida

// exercicio de escrita de codigo

// 1.A)


  const dadosDaPessoa = {
  nome: "Davi",
  apelidos: ["salsicha", "magrinho", "DG"]

  }
 function objeto(objeto1){

     console.log(`Eu sou ${objeto1.nome}, mas pode me chamar de: ${objeto1.apelidos}`)
 }
// // B)

 const novosApelidos ={ ...dadosDaPessoa, apelidos:["magrão", "dj", "gomes"]}
 console.log("atualizacao de nome",novosApelidos)

 objeto(novosApelidos)

 const pessoas1 ={
 nome:"Joaquim", 
 idade: 68,
 profissao: "carpinteiro",

 }

 const pessoas2 ={
     nome:"Antônio",
     idade:54,
    profissao:"pedreiro",
    
 }
 function listadasPessoas(pessoas){
 const lista = [pessoas.nome, pessoas.nome.length, pessoas.idade, pessoas.profissao, pessoas.profissao.length]
 return lista 
 }
 console.log(listadasPessoas(pessoas1))

// 3.A)
const carrinho = [] 
// b)
const frutas1 = {
nome: "banana",
disponibilidade:true

}
const frutas2 = {
    nome: "maça",
    disponibilidade:true
}
const frutas3 = {
    nome: "melancia",
    disponibilidade:true
}


// c)
function encherCarrinho(carrihoCheio){
 
carrinho.push(carrihoCheio)

}
encherCarrinho(frutas1)
encherCarrinho(frutas2)
encherCarrinho(frutas3)
console.log(carrinho)