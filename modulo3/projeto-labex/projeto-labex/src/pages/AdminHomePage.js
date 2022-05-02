import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../Hooks/useProtectedPage'
import styled from 'styled-components'

const DivMeio = styled.div`
display: flex;
justify-content:center;
`

const Lista = styled.div`
display: flex;
justify-content: space-between;
height: 100px;
margin-top:45px ;
border: 5px double aqua ;
width: 350px;
a{
color: white;

}
button{
height: 45px;
width: 98px;
margin-right: 10px;
font-style:italic;
}
`
const Header = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 10px;
margin-top: 10px;
button{
height: 50px;
width: 98px;
font-size: 15px;
font-style:italic;
margin-left: 25px;
cursor: pointer;
}
`
const TextoCard = styled.div`
cursor: pointer;
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
  const goTripsDetailsPage = (id) => {
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
  const logout = () => {
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
        <DivMeio>
        <Lista>
            <a onClick={() => goTripsDetailsPage(list.id)}>{list.name}</a>
            <button onClick={() => deletarViagem(list.id)}>
              Apagar
            </button>
        </Lista>
        </DivMeio>
    )
  })
  return (
    <div>
    <Header>
      <button onClick={logout}>logout</button>
      <button onClick={irParaHome}>
        Home
      </button>
      <button onClick={goCreateTripPage}>
        criar viagem
      </button>
      </Header>
     <TextoCard>
        {trips && tripsList}
     </TextoCard>
     
      </div>
  )
}

export default AdminHomePage