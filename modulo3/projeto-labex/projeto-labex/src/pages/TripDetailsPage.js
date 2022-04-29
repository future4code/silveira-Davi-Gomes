import axios from 'axios'
import React, { useState, useEffect }from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import useProtectedPage from '../Hooks/useProtectedPage'



export default function TripDetailsPage() {
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
    const approvedCandidates =  trip.approved && trip.approved.map((candidate) => {
        return (
          <div key={candidate.id}> {candidate.name} </div>
        )
      })
    const listaCandidatos = candidate && candidate.map((list) => {
        console.log(list)
        return (

            <div>

                <p>Nome:{list.name}</p>
                <p>Idade:{list.age}</p>
                <p>País:{list.country}</p>
                <p>Texto de candidatura:{list.applicationText}</p>
                <p>profissão:{list.profession}</p>
                <button onClick={() => candidato(list.id, true)}>aprovar</button>
                <button onClick={() => candidato(list.id, false)}>reprovar</button>
            </div>
        )
    })

    return (
        <div>
            <button onClick={goHomePage}>Home</button>
            <div>
                Nome: {trip.name}
                Data: {trip.data}
                planeta:{trip.planet}
                Descrição: {trip.description}
                Duração em dias: {trip.durationInDays}
            </div>
            <div>
                {approvedCandidates}
                { listaCandidatos}
            </div>
        </div>
    )
}

