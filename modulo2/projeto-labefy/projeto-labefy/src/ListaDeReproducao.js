import React, { Component } from 'react'
import axios from 'axios'

export default class ListaDeReproducao extends React.Component {
    state = {
        playlists: []
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

    render() {
        const listaDePlaylists = this.state.playlists.map((user) => {
            return <div key={user.id}>
                {user.name}
            </div>
        })


        return (
            <div>
                <h2>lista de reprodução</h2>
                <button onClick={this.props.irParaHome}>ir para pagina home </button>
                {listaDePlaylists}
            </div>
        )
    }
}
