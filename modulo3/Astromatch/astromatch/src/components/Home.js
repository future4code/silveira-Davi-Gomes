import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Div = styled.div`
    display: flex;
    justify-content: center;
    max-width:750vh;     
    max-height:750vh;     
    width: auto;     
    height: auto;
    margin-top:10vh;
`

const Card = styled.div`
    display: flex;
    justify-content: center;
    border: 5px double black;
    padding-bottom:10vh;
    width: 50vh;
    text-align: center;
    align-items: flex-end;

`
const Imagem = styled.div`
img{
    max-width:250px;     
    max-height:250px;     
    width: auto;     
    height: auto;
}

`

export default function Home(props) {
    const [profile, setProfile] = useState({})
    const getProfile = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi-silveira/person"
        axios
            .get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                alert("erro!!!!!!!!")
            })
    }
    useEffect(() => {
        getProfile()
    }, [])
    const escolhePessoa = (choice, profile) => {
        getProfile()
        const body = {
            choice: choice,
            id: profile
        }

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi-silveira/choose-person"
        axios
            .post(url, body)
            .then((res) => {
            })
            .catch((err) => {
                alert("ERROOOOOOOOOOOOOOOOO!")
            })
    }

    return (
        <Div>
            <Card>
                <div>
                    <h1>AstroMatch</h1>
                    <div>
                        <button onClick={props.irParaMatches}>match</button>
                    </div>
                    <Imagem>
                        <img src={profile.photo}></img>
                    </Imagem>
                    <div>
                        <h2>{profile.name}, {profile.age}</h2>
                        <p>{profile.bio}</p>
                    </div>
                    <div>
                        <button onClick={() => escolhePessoa(true, profile.id)}>❤</button>
                        <button onClick={() => escolhePessoa(false, profile.id)}>x</button>
                    </div>
                </div>
            </Card>
        </Div>
    )

}
