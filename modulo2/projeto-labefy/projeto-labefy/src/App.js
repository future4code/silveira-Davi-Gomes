import React, { Component } from 'react'
import CriarPlaylist from './CriarPlaylist'
import ListaDeReproducao from './ListaDeReproducao'

export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist"
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criarplaylist":
        return <CriarPlaylist irParaListaPlaylist={this.irParaListaPlaylist}/>
      case "listaplaylist":
        return <ListaDeReproducao irParaHome={this.irParaHome}/>
      default:
        return <div>ERRO!!!</div>

    }
  }

  irParaListaPlaylist = () => {
    this.setState({ telaAtual: "listaplaylist" })
  }


  irParaHome = () => {
    this.setState({ telaAtual: "criarplaylist" })
  }


  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
