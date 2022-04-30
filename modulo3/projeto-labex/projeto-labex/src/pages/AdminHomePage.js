import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../Hooks/useProtectedPage'
import styled from 'styled-components'


const Lista= styled.div`
a{
color: white;
}

`


function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate()
  const irParaHome = () => {
    navigate("/")

  }
  const irParaLogin = () => {
    navigate("/login")
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
  const logout = () =>{
    localStorage.removeItem("token")
    irParaLogin(navigate)
  }
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
      <Lista>
        <a onClick={() => goTripsDetailsPage (list.id)}>{list.name}</a>
        <div>
          <button onClick={() => deletarViagem(list.id)}>
          Apagar
        </button>
        </div>
      </Lista>
    )
  })
  return (
    <div>
      <button onClick={logout}>logout</button>
      <button onClick={irParaHome}>
        Home
      </button>
      <button onClick={goCreateTripPage}>
       criar viagem
      </button>
      
        {trips && tripsList}
      
        
      
    </div>
  )
}

export default AdminHomePage