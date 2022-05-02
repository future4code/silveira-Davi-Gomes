import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useProtectedPage from '../Hooks/useProtectedPage'
import './css/TripDetailsPage.css'
import styled from 'styled-components'


const Header = styled.div`
display: flex;
justify-content:flex-end;
margin-right:30px;
margin-top: 10px;
button{
font-style:italic;
}
`
const CardGrande = styled.div`
button{
    height: 45px;
    margin: 25px;
}
`



function TripDetailsPage() {
    useProtectedPage()

    const navigate = useNavigate()

    const params = useParams()

    const goHomePage = () => {
        navigate("/")
    }

    const [trip, setTrip] = useState([])
    const [candidate, setCandidate] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-gomes-silveira/trip/${params.id}`,
            {
                headers: {
                    auth: token
                }
            }
        )
            .then((res) => {
                console.log(res)
                setTrip(res.data.trip)
                setCandidate(res.data.trip.candidates)
            })
            .catch((err) => {
                alert("Ocorreu um erro, por favor tente novamente!")
            })
    }, [])

    const candidato = (id, choice) => {
        const token = localStorage.getItem("token")

        const body = { approve: choice }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-gomes-silveira/trips/${trip.id}/candidates/${id}/decide`, body,
            {
                headers: {
                    auth: token
                }
            }

        )
            .then((res) => {
                if (choice === true) {
                    alert("candidato aprovado!")
                } else {
                    alert("candidato reprovado!")

                }
            }).catch((err) => {
                console.log(err.res.data.message)
                alert("ocorreu um erro, por favor tente novamente!")
            })
    }
    const approvedCandidates = trip.approved && trip.approved.map((candidate) => {
        return (
            <div key={candidate.id}> {candidate.name} </div>
        )
    })
    const listaCandidatos = candidate && candidate.map((list) => {
        console.log(list)
        return (

            <CardGrande className="CardGrande2">

                <p>Nome:{list.name}</p>
                <p>Idade:{list.age}</p>
                <p>País:{list.country}</p>
                <p>Texto de candidatura:{list.applicationText}</p>
                <p>profissão:{list.profession}</p>
                <button onClick={() => candidato(list.id, true)}>aprovar</button>
                <button onClick={() => candidato(list.id, false)}>reprovar</button>
            </CardGrande>
        )
    })

    return (
        <div>
            <Header>
                <button onClick={goHomePage}>Home</button>
            </Header>
            <div className="GlobalStylhes1">

                <div className="TituloDetalhes">
                    Nome: {trip.name}
                    <br />
                    Data: {trip.date}
                    <br />
                    planeta: {trip.planet}
                    <br />
                    Descrição:
                    <br />
                    {trip.description}
                    <br />
                    Duração em dias:
                    <br />
                    {trip.durationInDays}
                </div>
                <div className='card10'>
                    <div className='card__content10'>
                        <div className="CardGrande2">
                            <p>aprovados:</p>
                            {approvedCandidates}</div>
                        {listaCandidatos}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TripDetailsPage
