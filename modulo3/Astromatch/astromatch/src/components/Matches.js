import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
                    <ul>
                        <div>
                            <img src={list.photo} /><h3>{list.name}</h3>
                        </div>
                    </ul>
                </div>
            )
        })
    useEffect(() => {
            getMatches()
        }, [])


        return (
            <div>
                <div>
                    <button onClick={props.irParaHome}>voltar</button>
                    <h1>AstroMatch</h1>
                    <div>
                        <button onClick={() => clear()}>apagar</button>
                    </div>
                    {listaDeMatches}
                </div>
            </div>
        )
}
