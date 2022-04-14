import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Div = styled.div`
color:#0DF171;

`
const ContainerInputs = styled.div`
color:#0DF171;
display: flex;
flex-direction: column;
align-items: center;

button{
    cursor: pointer;
}

`

const headers = {
    headers: {
        Authorization: "davi-araujo-silveira"

    }
}

export default class DetalhesPlaylist extends React.Component {
    state = {
        nomeMusica: "",
        artista: "",
        url: "",
        detalhes: []
    }
    componentDidMount() {
        this.detalhesDaPlaylist()
    }
    onChangeNomeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }
    onChangeArtista = (event) => {
        this.setState({ artista: event.target.value })
    }
    onChangeUrl = (event) => {
        this.setState({ url: event.target.value })
    }
    addMusicas = () => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.url
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`

        axios.post(url, body, headers)
            .then((res) => {

                this.buscarInformacao()
                this.setState({ nomeMusica: "", artista: "", url: "" })
                console.log(res.data);
            })
            .catch((err) => {


            })
    }


    detalhesDaPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`
        axios.get(url, headers)

            .then((res) => {
                console.log(res.data)
                this.setState({ detalhes: res.data.result.tracks })

            })
            .catch((err) => {
                console.log("errooooooo!!!")

            })
    }


    render() {
        const detalhesPlaylist = this.state.detalhes.map((informa) => {
            return (
                <Div key={informa.id}>
                    <li>Nome da Musica:{informa.name}</li>
                    <li>Artista:{informa.artist} </li>
                    <audio width="300" height="32" controls="controls" src={informa.url} type="audio/mp3"></audio>

                </Div>
            )
        })


        return (
            <ContainerInputs>

                <button onClick={this.props.irParaHome}>Ir para home </button>
                <h2>Musicas</h2>
                <input
                    placeholder={"Nome da música"}
                    value={this.state.nomeMusica}
                    onChange={this.onChangeNomeMusica}
                />
                <input
                    placeholder={"Nome do artista"}
                    value={this.state.artista}
                    onChange={this.onChangeArtista}
                />
                <input
                    placeholder={"Link da música"}
                    value={this.state.url}
                    onChange={this.onChangeUrl}
                />
                <button onClick={this.addMusicas}>Adicionar</button>
                <h2>Detalhes da Playlist</h2>

                {detalhesPlaylist}
            </ContainerInputs>
        )
    }
}
