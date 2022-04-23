import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const Div = styled.div`
    display: flex;
    text-align:center;
    justify-content: space-around;
    height:auto;
    
`

const ImagemMatch = styled.div`
    display: flex;
    justify-content: space-around;
li{
    list-style-type: none;
}
img{
    max-width:80px;     
    max-height:80px;     
    width: auto;     
    height: auto;
    margin-bottom:20px;
}
`

const CardMatch = styled.div`
    margin-top:20px;
    justify-content: center;
    border: 5px double black;
    border-radius:60px;
    padding-bottom:10vh;
    width: 50vh;
    height: auto;
`
const DivHeader = styled.div`
    display: flex;
    justify-content: space-around;
    
    Button{
        width: 20px;
        height: 20px;
        margin:30px;
        margin-left: 10px;
    }
   
`
const Astromatch = styled.div`
color :#6101BD ;

`


export default function Matches(props) {

    const [matches, setMatches] = useState([])

    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi-silveira/matches"
        axios
            .get(url)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert("ERRO DE NOVO!!!")
            })
    }
    const clear = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi-silveira/clear"
        axios
            .put(url)
            .then((res) => {
                getMatches()
            })
            .catch((err) => {
                alert("ULTIMO ERRO!!!")
            })
    }
    const listaDeMatches = matches.map((list) => {
        return (
            <div>
                <ImagemMatch>
                    <li>
                        <div>
                            <img src={list.photo} /><h3>{list.name}</h3>
                        </div>
                    </li>
                </ImagemMatch>
            </div>
        )
    })
    useEffect(() => {
        getMatches()
    }, [])


    return (
        <Div>
            <CardMatch>
                <DivHeader>
                    <Astromatch>
                        <h1>AstroMatch</h1>
                    </Astromatch>
                    <Button variant="contained" color="primary" onClick={props.irParaHome}>voltar</Button>
                </DivHeader>
                <div>
                    {listaDeMatches}
                </div>
                <Button variant="outlined" color="primary" onClick={() => clear()}>apagar</Button>
            </CardMatch>
        </Div>
    )
}