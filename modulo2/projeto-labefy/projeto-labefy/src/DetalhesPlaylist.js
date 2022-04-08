import React, { Component } from 'react'
import axios from 'axios'

const headers ={
    headers: {
            Authorization: "davi-araujo-silveira"
            
        }
}

export default class DetalhesPlaylist extends React.Component {
  state = {
      detalhes:[]
  }
  componentDidMount(){
      this.detalhesDaPlaylist()
  }
  detalhesDaPlaylist = ()=> {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
    axios.get(url, headers)
        
    .then((res)=>{
        console.log(res.data)
        this.setState({ detalhes: res.data.result.tracks })

    })
    .catch((err)=>{
console.log("errooooooo!!!")

    })
 }

  
    render() {
        const detalhesPlaylist = this.state.detalhes.map((informa) =>{
            return(
                <div key={informa.id}>
                <li>{informa.name}</li>
                </div>
            )
        })
    
    
        return (
      <div>
          Detalhes da Playlist
            {detalhesPlaylist}
      </div>
    )
  }
}
