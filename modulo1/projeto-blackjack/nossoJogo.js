/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

   const cartaJogador1 = comprarCarta()
   const cartajogador2 = comprarCarta()
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   
   if(confirm("Quer começar uma nova rodada?")){

      let cartasUsuario = [cartaJogador1, cartajogador2]
      let cartasComputador = [cartaComputador1, cartaComputador2]
      let somaCartasUsuario = (cartasUsuario[0].valor + cartasUsuario[1].valor)
      let somaCartasComputador = (cartasComputador[0].valor + cartasComputador[1].valor)
      let textoCartasUsuario = `${cartasUsuario[0].texto} ${cartasUsuario[1].texto}`
      let textoCartasComputador = `${cartasComputador[0].texto} ${cartasComputador[1].texto}`
   
      console.log(`Usuário - cartas: ${textoCartasUsuario} - pontuação ${somaCartasUsuario}`)
      console.log(`Computador - cartas: ${textoCartasComputador} - pontuação ${somaCartasComputador}`)
      if (somaCartasUsuario > somaCartasComputador) {
         console.log('O usuário ganhou!')
      }else if (somaCartasComputador > somaCartasUsuario) {
         console.log('O computador ganhou!')
      } else if (somaCartasUsuario === somaCartasComputador){
         console.log('Empate!')
      }
   } else {
      console.log('O jogo acabou!')
   }