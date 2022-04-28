import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import './css/ListTripsPage.css'
import axios from 'axios'
import useProtectedPage from '../Hooks/useProtectedPage'

const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;  
    color: white;
`
const Titulo = styled.div`
display: flex;
justify-content:space-around;
`
const BotaoCriar = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 8vh;

button{
margin-right:25px;
margin-left: 25px;
height: 6vh;
width: 15vh;
}

`
const Card = styled.div`
display: flex;
justify-content: space-around;


`
const ButtonHome = styled.div`
display: flex;
justify-content: flex-end;
margin-top:55px ;
margin-right: 55px;
`
const Button = styled.div`
display: flex;
justify-content: flex-end;
height: 25vh;
`

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
            <div key={trips.id}>
                <p>Nome: {list.name}</p>
                <p>Descrição:{list.description}</p>
                <p>Planeta:{list.planet}</p>
                <p>Duração:{list.durationInDays}</p>
                <p>Data:{list.date}</p>
            </div>
        )
    })
    return (
        <GlobalStyles>
            <div>
                <ButtonHome className="Button" >
                    <button onClick={irParaHome}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Home</span>
                    </button>
                </ButtonHome>

                <div>
                    <Titulo>
                        <h1>Embarque nas nossas Viagens </h1>
                    </Titulo>
                </div>
                <BotaoCriar>
                    <Button>
                        <button onClick={ApplicationFormPage}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Inscrever-se</span>
                        </button>
                    </Button>
                </BotaoCriar>
                <Card>
                    <div class="card">
                        <div class="card__content">
                            <li>
                                {listTrips}
                            </li>
                        </div>
                    </div>
                </Card>
            </div>
        </GlobalStyles>

    )
}

export default ListTripsPage