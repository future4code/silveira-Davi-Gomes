// exercicio de interpretação 
// 1.sera imprimido os itens, o index e a quantidade de arrays
//  {nome: 'Amanda Rangel', apelido: 'Mandi'} 0 (3) [{…}, {…}, {…}]
//  {nome: 'Laís Petra', apelido: 'Laura'} 1 (3) [{…}, {…}, {…}]
//  {nome: 'Letícia Chijo', apelido: 'Chijo'} 2 (3) [{…}, {…}, {…}]

// 2.sera imprimido apenas os 3 nomes

// 3.
// (2) [{…}, {…}]
// 0:
// apelido: "Mandi"
// nome: "Amanda Rangel"
// [[Prototype]]: Object
// 1:
// apelido: "Laura"
// nome: "Laís Petra"

// exercicio de escrita 1.
// A)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
] 
const nomeDosPets = pets.map((item, index, array) => {
return item.nome

})
 console.log(nomeDosPets)

//  B)

const salsichas = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
] 
const racaSalsichas = salsichas.filter((item,)=>{
    return item.raca ==="Salsicha"
})
console.log(racaSalsichas)

// C)
const Poodle = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const racaPoodle = Poodle.filter((item) =>{
return item.raca === "Poodle" 
 })
 console.log(racaPoodle)
  
 
const racaPoodle2 = racaPoodle.map((item)=>{
return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(racaPoodle2)

2.
// a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const nomeProdutos = produtos.map((item)=>{
     return item.nome 
 })
 console.log(nomeProdutos)

 // B)
 const produtos2 = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const desconto1 = produtos2.map((item, )=>{ 
const objeto = {nome: item.nome, preco: item.preco * 0.95}
return objeto 
 })
 console.log(desconto1)

// c)

const produtos3 = produtos.filter((item) =>{
    return item.categoria === "Bebidas" 
     })
     console.log(produtos3)
      
// d)
const ype = produtos.filter((item)=>{ 
return item.nome.includes("Ypê")


})
console.log(ype)

// e)
const comprePor = produtos.filter((item)=>{
    if (item.nome.includes("Ypê")){
        console.log(`Compre ${item.nome} por ${item.preco}`)
    }

 })