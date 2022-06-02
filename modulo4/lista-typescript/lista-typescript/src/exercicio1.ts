type dados = {
    name: string,
    BirthDate: string
}
const pessoa = {
    name: "davi",
    BirthDate: "08/08/1999"
}
function separar(pessoa:dados):string[]{
    return pessoa.BirthDate.split("/")
}
console.log(`Olá me chamo ${pessoa.name}, nasci no dia ${separar(pessoa)[0]} do mês ${separar(pessoa)[1]}do ano de ${separar(pessoa)[2]}.`);
