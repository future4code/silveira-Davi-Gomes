// 1)
// a)
// const minhaString:string = 279
// erro, pois um tipo number n pode ser atribuido a um tipo string

// b)

// const meuNumero:number | string = 484

// c)

const novoObjeto: {
    name:string,
    age:number,
    corFavorita:string
} ={
    name:"davi",
    age:22,
    corFavorita: "preto"
}

type Pessoa = {
    name:string
    age:number,
    corFavorita:string
}
const pessoa1: Pessoa = {
    name:"Robervaldo",
    age: 65,
    corFavorita: "amarelo"
}
const pessoa2: Pessoa = {
    name:"Bruna",
    age: 18,
    corFavorita: "rosa"
}
const pessoa3: Pessoa = {
    name:"Gabriel",
    age:30,
    corFavorita: "vermelho"
}

// d)

enum Cores {
    Vermelho = "Vermelho",
    Laranja = 'Laranja',
    Amarelo = 'Amarelo',
    Verde = 'Verde',
    Azul = 'Azul',
    Anil = 'Anil',
    Violeta = 'Violeta'
}
const pessoa4: Pessoa = {
    name: "Jucelino",
    age: 42,
    corFavorita: Cores.Amarelo

}
const pessoa5: Pessoa = {
    name: "Valentina",
    age: 18,
    corFavorita: Cores.Anil
}
const pessoa6: Pessoa = {
    name: "Francisco",
    age: 56,
    corFavorita: Cores.Verde

}
const pessoa7: Pessoa = {
    name: "Roberto",
    age: 57,
    corFavorita: Cores.Violeta

}