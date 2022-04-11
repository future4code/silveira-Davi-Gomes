import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerPlaylist = styled.div`
    border-radius:30px;
    color:#0DF171;
    border: 1px solid #0DF171;
    padding: 10px;
    margin: 10px;
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: space-between;

    button{
    .myButton {
	box-shadow: 0px 0px 0px 2px #3dc21b;
	border-radius:20px;
	display:inline-block;
	font-family:Arial;
	font-size:19px;
	padding:12px 37px;
	text-decoration:none;

}
    .myButton:active {
    position:relative;
	top:1px;
}
    
    &:hover{
    cursor:pointer; 
}

    }

`
const Div = styled.div`
display: flex;
justify-content: space-around


`
const ContainerH2 = styled.div`
h2{
    color:#0DF171;

}
button{
    cursor: pointer; 
}
`


export default class ListaDeReproducao extends React.Component {
    state = {
        playlists: [],

    }
    componentDidMount() {
        this.verPlaylist()

    }


    verPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "davi-araujo-silveira"
            }

        })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })


            .catch((err) => {
                alert("OCORREU UM ERRO INESPERADO!!!")
            })
    }
    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "davi-araujo-silveira"
            }
        })
            .then((res) => {
                alert("Playlist deletada!")
                this.verPlaylist()
            })

            .catch((err) => {
                alert("erro!")
            })
    }



    render() {
        const listaDePlaylists = this.state.playlists.map((user) => {
            return <div key={user.id}>
                <ContainerPlaylist>
                    {user.name}
                    <button onClick={() => this.props.detalhesPlaylist(user.id)}>detalhes da playlists</button>
                    <button onClick={() => this.deletarPlaylist(user.id)}>X</button>

                </ContainerPlaylist>
            </div>
        })


        return (
            <Div>
                <div>
                    <ContainerH2>

                        <h2>lista de reprodução</h2>
                        <button onClick={this.props.irParaHome}>ir para pagina home </button>
                        {listaDePlaylists}

                    </ContainerH2>
                </div>
            </Div>
        )
    }
}
