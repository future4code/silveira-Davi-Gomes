import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import './css/ListTripsPage.css'
import axios from 'axios'
import useProtectedPage from '../Hooks/useProtectedPage'


function ListTripsPage() {
    useProtectedPage()
    const navigate = useNavigate()
    const irParaHome = () => {
        navigate("/")
    }
    const ApplicationFormPage = () => {
        navigate("/trips/application")
    }
    const [trips, setTrips] = useState([]);
    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-gomes-silveira/trips")
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch(() => {
                alert("Algo deu errado!!!")
            })

    }
    useEffect(() => {
        getTrips()
    }, [])

    const listTrips = trips.map((list) => {
        return (
            <div className="CardGrande" key={trips.id}>
                <p>Nome: {list.name}</p>
                <p>Descrição:{list.description}</p>
                <p>Planeta:{list.planet}</p>
                <p>Duração:{list.durationInDays}</p>
                <p>Data:{list.date}</p>
            </div>
        )
    })
    return (
        <div className="GlobalStyles">
            <div>
                <div className="ButtonHome" >
                    <button onClick={irParaHome}>
                        Home
                    </button>
                </div>
                <div>
                    <div className="Titulo">
                        <h1>Embarque nas nossas Viagens </h1>
                    </div>
                </div>
                <div className="BotaoCriar">

                    <button onClick={ApplicationFormPage}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Inscrever-se</span>
                    </button>

                </div>
                <div className="Card">

                    <div class="card2">
                        <div class="card__content">
                            {listTrips}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListTripsPage