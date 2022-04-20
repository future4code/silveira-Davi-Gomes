import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        <div>
            <div>
                <h1>AstroMatch</h1>
                <div>
                    <button onClick={props.irParaMatches}>match</button>
                </div>
                <div>
                    <img src={profile.photo}></img>
                </div>
                <div>
                    <h2>{profile.name}, {profile.age}</h2>
                    <p>{profile.bio}</p>
                </div>
                <div>
                    <button onClick={() => escolhePessoa(true, profile.id)}>❤</button>
                    <button onClick={() => escolhePessoa(false, profile.id)}>x</button>
                </div>
            </div>
        </div>
    )

}
