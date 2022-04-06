import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Caixa = styled.div`
    background-color:black;
    border-radius:30px;
    color:white;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:25vh
    
`
const Div = styled.div`
background-color: #949494;
display: flex;
justify-content:center;
align-items: center;
height:100vh; 
flex-direction:column-reverse;
justify-content: flex-end
`


export default class Cadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({ nome: event.target.value })
    }
    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email


        }

        axios.post(url, body, {
            headers: {
                Authorization: "davi-araujo-silveira"
            }
        })
            .then((res) => {
                alert("Usuário cadastrado!")
                this.setState({ nome: "", email: "" })
            })


            .catch((err) => {
                alert(err.response.data.message)

            })
    }
    render() {
        return (
            <Div>
                <Caixa>
                    <h2>Cadastro de usuario</h2>
                    <button onClick={this.props.irParaLista}>ir para lista de usuários</button>
                    <h2>Cadastro</h2>
                    <input
                        placeholder={"Nome"}
                        value={this.state.nome}
                        onChange={this.handleNome}
                    />
                    <input
                        placeholder={"E-mail"}
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />
                    <button onClick={this.fazerCadastro}>Cadastrar</button>

                </Caixa>
            </Div>
        )
    }
}