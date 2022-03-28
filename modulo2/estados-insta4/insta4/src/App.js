import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "Robervaldo",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "Jorginho",
        fotoUsuario: "https://picsum.photos/50/60",
        fotoPost: "https://picsum.photos/200/160"
      },
      {
        nomeUsuario: "Gustavo",
        fotoUsuario: "https://picsum.photos/50/70",
        fotoPost: "https://picsum.photos/200/170"
      }
    ],
    inputUsuario: "",
    inputFotoPost: "",
    inputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost

    }
    const atualizaPosts = [novoPost, ...this.state.post]
    this.setState({
      post: atualizaPosts
    })
  }
  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  };
  onChangeinputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  };

  render() {
    const arrayDeComponentes = this.state.post.map((item) => {

      return (
        <Post
          {...item}
        />
      )
    })

    return (
      <MainContainer>
        {arrayDeComponentes}
        <input
          value={this.state.inputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Nome Usuário"}
        />
        <input
          value={this.state.inputFotoUsuario}
          onChange={this.onChangeinputFotoUsuario}
          placeholder={"foto usuário"}
        />
        <input
          value={this.state.inputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto post"}
        />
        <button onClick={this.adicionaPost}>Adiciona</button>
        
      </MainContainer>
    );
  }




}
export default App;

