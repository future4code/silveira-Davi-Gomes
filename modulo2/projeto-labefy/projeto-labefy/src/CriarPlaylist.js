import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './img/spotify.png'


const ContainerHome = styled.div`

    
    border-radius:50px;
    color:#0DF171;
    border: 1px solid #0DF171;
    padding: 10px;
    margin: 10px;
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:28vh

`
const Div = styled.div`
background-color:#111111;
display: flex;
justify-content:center;
align-items: center;
height:100vh; 
flex-direction:column-reverse;
justify-content: center;
height: 100vh;
`

export default class CriarPlaylist extends React.Component {
    state = {
        nomePlaylist: "",

    }

    handleNomePlaylist = (event) => {
        this.setState({ nomePlaylist: event.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomePlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: "davi-araujo-silveira"
            }
        })
            .then((res) => {
                alert("Playlist criada!")
                this.setState({ nomePlaylist: "" })
            })


            .catch((err) => {
                alert("OCORREU UM ERRO!!!")
            })


    }

    render() {
        return (
            <div>
            <img src="src\img\spotify.png"></img>
            <Div>
                <ContainerHome>
                <h3>Projeto Labe-fy</h3>
                    
                    <button onClick={this.props.irParaListaPlaylist}>lista de playlist</button>
                    <p>Digite o Nome da Playlist</p>
                    <button onClick={this.criarPlaylist}>criar playlist</button>
                    <input
                        placeholder={"Nome da playlist"}
                        value={this.state.nomePlaylist}
                        onChange={this.handleNomePlaylist}
                    />
                </ContainerHome>
            </Div>
            </div>
        )
    }
}
