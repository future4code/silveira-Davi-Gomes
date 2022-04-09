import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerPlaylist = styled.div`
    border-radius:30px;
    
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: space-between;
    
    .myButton:active {
	position:relative;
	top:1px;
}


&:hover{
color: aqua;
background-color: black ;
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
            <div>
                <div>
                    <div>

                        <h2>lista de reprodução</h2>
                        <button onClick={this.props.irParaHome}>ir para pagina home </button>
                        {listaDePlaylists}
                    </div >
                </div>
            </div>
        )
    }
}
