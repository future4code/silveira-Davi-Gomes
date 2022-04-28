// import React, { useState, useEffect }from 'react'
// import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import useProtectedPage from '../Hooks/useProtectedPage'

// const GlobalStyles = styled.div`
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//     text-decoration: none;
//     display: flex;
//     height: 100vh;
//     flex-direction: column;  
//     color: rgb(217, 176, 255);
// `


// export default function CreateTripPage() {
//     useProtectedPage()
//     const navigate = useNavigate()

//     const goHomePage = () => {
//         navigate("/")
//     }
//     const [name, setname] = useState("")
//     const [planet, setPlanet] = useState("")
//     const [date, setDate] = useState("")
//     const [description, setDescription] = useState("")
//     const [durationInDays, setDurationInDays] = useState("")

//     const token = localStorage.getItem("token")
//     axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-gomes-silveira/trips")
//         .then((res) => {
//             alert("viagem criada!!!")

//         }).catch((err) => {
//             alert("ocorreu um erro!!!")

//         })
//     const onChangeName = (event) => {
//         setname(event.target.value)

//     }

//     const onChangePlanet = (event) => {
//         setPlanet(event.target.value)
//     }

//     const onChangeDate = (event) => {
//         setDate(event.target.value)
//     }
//     const onChanDescription = (event) => {
//         setDescription(event.target.value)
//     }
//     const onChanDurationInDays = (event) => {
//         setDurationInDays(event.target.value)
//     }

//     return (
//         <GlobalStyles>
//             <div>
//                 <button onClick={goHomePage}>
//                     Home
//                 </button>
//                 <h1>Sala de comando</h1>
//                 <div>
//                     <input
//                         placeholder="Nome"
//                         type="name"
//                         value={name}
//                         onChange={onChangeName}
//                     />
//                     <select>
//                         <option>Escolha um planeta</option>
//                     </select>
//                     <input
//                         placeholder="Data"
//                         type="date"
//                         value={date}
//                         onChange={onChangeDate}
//                     />
//                     <input
//                         placeholder="Descrição"
//                         type="date"
//                         value={description}
//                         onChange={onChanDescription}
//                     />
//                     <input
//                         placeholder="Duração em dias"
//                         value={durationInDays}
//                         onChange={onChanDurationInDays}
//                     />
//                 </div>
//                 <button>Criar</button>
//             </div>
//         </GlobalStyles >
//     )
// }