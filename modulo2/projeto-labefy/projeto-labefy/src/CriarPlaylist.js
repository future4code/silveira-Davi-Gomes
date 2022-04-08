import axios from 'axios'
import React, { Component } from 'react'

export default class CriarPlaylist extends React.Component {
    state = {
        nomePlaylist: "",

    }

    handleNomePlaylist = (event) => {
        this.setState({ nomePlaylist: event.target.value})
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
                <h2>Pagina Home</h2>
                <button onClick={this.criarPlaylist}>criar playlist</button>
                <button onClick={this.props.irParaListaPlaylist}>lista de playlist</button>
                <h2>Digite o Nome da Playlist</h2>
                <input
                placeholder={"Nome da playlist"}
                value={this.state.nomePlaylist}
                onChange={this.handleNomePlaylist}
                />

            </div>
        )
    }
}
