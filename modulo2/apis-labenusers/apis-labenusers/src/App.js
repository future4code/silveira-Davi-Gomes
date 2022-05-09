import React from "react"
import Cadastro from "./components/Cadastro"
import ListaUsuarios from "./components/listaUsuarios"

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista} />
      case "lista":
        return <ListaUsuarios irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Erro! pagina não encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}