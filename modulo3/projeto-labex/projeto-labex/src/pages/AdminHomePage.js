import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../Hooks/useProtectedPage'




function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate()
  const irParaHome = () => {
    navigate("/")

  }
  const goCreateTripPage = () => {
    navigate("/admin/trip/create")
  }
  const goTripsDetailsPage= (id) => {
    navigate(`/admin/trips/${id}`)
  }
  const [trips, setTrips] = useState([])
  useProtectedPage()
  useEffect(() => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-gomes-silveira/trips")
      .then((res) => {
        setTrips(res.data.trips)
      }).catch(() => {
        alert("Ocorreu um erro!!!")
      })
  }, [])
  const deletarViagem = (id) => {
    const token = localStorage.getItem("token")
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-gomes-silveira/trips/${id}`,
      {
        headers: {
          auth: token
        }
      }
    )
      .then(() => {
        alert("viagem excluida")
      })
      .catch(() => {
        alert("ocorreu um erro, por favor tente novamente")
      })
  }
  const tripsList = trips.map((list) => {
    return (
      <div>
        <button onClick={() => goTripsDetailsPage (list.id)}>{list.name}
          
        </button>
        <button onClick={() => deletarViagem(list.id)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Apagar</span>
        </button>
      </div>
    )
  })
  return (
    <div>
      <button onClick={irParaHome}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>Home</span>
      </button>
      <button onClick={goCreateTripPage}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>criar viagem</span>
      </button>
      <li>
        {trips && tripsList}
      </li>
    </div>
  )
}

export default AdminHomePage