import React from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 3px outset black;
  height: 100vh;
  box-sizing: border-box;
  width: 50vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: green;
`

const MensagemContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

const InputContainer = styled.div`
  display: flex;
`

const InputNome = styled.input`
  width: 100px;
`

const InputMensagem = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  state = {
    messages: [],
    usuario: '',
    mensagem: ''
  }

  onChangeUsuario = (event) => {
    this.setState({usuario: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({mensagem: event.target.value})
  }

  enviarMensagem = () => {
    const novaMensagem = {
      user: this.state.usuario,
      text: this.state.mensagem
    }

    const novaMensagemArray = [novaMensagem, ...this.state.messages]

    this.setState({messages: novaMensagemArray, mensagem: ''})
  }

  render() {
    return (
      <AppContainer>
        <MensagemContainer>
          {this.state.messages.map((message, index) => {
            return <p key={index}>
              <strong>{message.user}</strong>: {message.text}
            </p>
          })}
        </MensagemContainer>
        <InputContainer>
          <InputNome
            onChange={this.onChangeUsuario} 
            value={this.state.usuario} 
            placeholder={'Nome'}
          />
          <InputMensagem
            onChange={this.onChangeMensagem} 
            value={this.state.mensagem} 
            placeholder={'Mensagem'}
          />
          <button onClick={this.enviarMensagem}>Enviar</button>
        </InputContainer>
      </AppContainer>
    );
  }
}

export default App;

