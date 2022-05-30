//escreva o seu código aqui
// 1)
// function checarTriangulo (a:number, b:number, c:number):string{
//     if(a !== b && b !== c){
//         return "Escaleno";
//     }else if (a === b && b === c){
//         return "Equilátero";
//     }else{
//         return "Isóceles";
//     }
// }
// console.log(checarTriangulo(1,1,1))

// 2)

// function imprimeTresCoresFavoritas():void {
//     const cor1:string = process.argv[2]
//     const cor2:string = process.argv[3]
//     const cor3:string = process.argv[4]
    
//     console.log([cor1, cor2, cor3])
// }
// imprimeTresCoresFavoritas()

// 3)
// function checaAnoBissexto(ano:number):boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
// }
// console.log(checaAnoBissexto(2020))
// 4)
// function comparaDoisNumeros(num1:number, num2:number):number {
//     let maiorNumero;
//     let menorNumero;
  
//     if (num1 > num2) {
//     maiorNumero = num1;
//     menorNumero = num2;
//     } else {
//     maiorNumero = num2;
//     menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }
//   console.log(comparaDoisNumeros(54, 23));
  
function checaRenovacaoRG(anoAtual:number,anoNascimento:number,anoEmissao:number):boolean {

    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
 console.log(checaRenovacaoRG(2022, 1999, 2018))