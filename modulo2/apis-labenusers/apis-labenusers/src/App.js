import React from 'react';
import CriarUsuario from './components/cadastro';
// import styled from 'styled-components';
import ListarUsuario from './components/listaUsuarios';

const headers = {
  headers: {
    Authorization: "davi-araujo-silveira",
  }
}

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers"

export default class App extends React.Component {
  state = {
    pagina: "cadastro"
  };

  trocarTela = () => {
    if (this.state.pagina === "cadastro") {
      this.setState({ pagina: "usuario" });
    } else {
      this.setState({ pagina: "cadastro" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.trocarTela}> Trocar tela</button>
        {this.state.pagina === "cadastro" ? <CriarUsuario /> : <ListarUsuario />}
      </div>
    )
  }
}