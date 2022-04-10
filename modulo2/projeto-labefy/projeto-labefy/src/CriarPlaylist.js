import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './components/img/spotify.png'


const ContainerHome = styled.div`
    border-radius:50px;
    color:#0DF171;
    border: 1px solid #0DF171;
    padding: 10px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:28vh

`
const Div = styled.div`
    display: auto;
    margin: -8px;
    background-color:#111111;
    display: grid;
    justify-content:center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-size: cover;
`


const LogoLabefy = styled.div`
img{
    width: 50px;
    display: flex;
    position: relative;
    margin:18px;

}
background-color:#111111;
    margin: -8px;
    color:#0DF171;
    display: grid;
    justify-items: center;
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
            
            

                <LogoLabefy>
                    <img src={Logo}></img>
                    <h1>labe-fy</h1>
                </LogoLabefy>


                <Div>


                    <ContainerHome>


                        <h3>Veja as suas playlists</h3>

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

