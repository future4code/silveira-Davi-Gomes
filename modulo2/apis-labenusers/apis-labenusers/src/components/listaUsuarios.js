import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CardUsuario = styled.div`
    
    padding: 10px;
    margin: 10px;
    justify-content:space-between ;
    display: flex;
    width: 200px;

`
const Caixa = styled.div`
    background-color:black;
    border-radius:30px;
    color:white;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:38vh
    
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


export default class Listasuario extends React.Component {
    state = {
        usuarios: []

    }

    componentDidMount() {
        this.pegarUsuarios()
    }


    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "davi-araujo-silveira"
            }

        })
            .then((res) => {
                this.setState({ usuarios: res.data })
            })

            .catch((err) => {
                alert("ERRO!!!")
            })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "davi-araujo-silveira"
            }
        })
            .then((res) => {
                alert("Usuario deletado")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("ERRO!!!")

            })
    }



    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsuario>

        })


        return (
            <Div>
                <Caixa>
                    <button onClick={this.props.irParaCadastro}>ir para cadastro</button>
                    <h2>lista de Usuário</h2>
                    {listaUsuarios}
                </Caixa>
            </Div>
        )
    }
}