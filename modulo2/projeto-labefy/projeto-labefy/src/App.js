import React, { Component } from 'react'
import CriarPlaylist from './CriarPlaylist'
import ListaDeReproducao from './ListaDeReproducao'
import DetalhesPlaylist from './DetalhesPlaylist'
export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist",
    idPlayList:"",
    namePlaylist:""
    
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criarplaylist":
        return <CriarPlaylist irParaListaPlaylist={this.irParaListaPlaylist}/>
      case "listaplaylist":
        return <ListaDeReproducao detalhesPlaylist= {this.detalhesPlaylist} irParaHome={this.irParaHome}/>
      case "detalhes":
      return <DetalhesPlaylist  idPlaylist={this.state.idPlayList} namePlaylist={this.state.namePlaylist}/>
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
  detalhesPlaylist =(id,name) => {
    this.setState({telaAtual:"detalhes" ,idPlayList: id, namePlaylist: name})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
