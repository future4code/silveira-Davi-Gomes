import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useProtectedPage from '../Hooks/useProtectedPage'
import { Planets } from '../constants/planets'
import useForm from '../Hooks/useForm'


const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    height: 100vh;
    flex-direction: column;  
    color:white;
`
const Header = styled.div`
display: flex;
justify-content:flex-end;
margin-right:30px ;
margin-top:30px;
`
const BotaoCriar = styled.div`
display: flex;
justify-content:center;
button{
    height: 45px;
    margin-top:30px;
}
`
const Inputs = styled.div`
margin-left:30%;


`
const SalaDeComando = styled.div`
text-align:center;

`

 function CreateTripPage() {
    useProtectedPage()
    const navigate = useNavigate()

    const goHomePage = () => {
        navigate("/")
    }
    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    })
    const create = (event) => {
        event.preventDefault()
        createTrip()
        cleanFields()
    }

    const createTrip = () => {
        const headers = {
            headers: {
                "content-type": "application/json",
                "auth": localStorage.getItem("token")

            }
        }


        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-gomes-silveira/trips", form, headers)
            .then((res) => {
                alert("viagem criada!!!")

            }).catch((err) => {
                
                alert("ocorreu um erro!!!")

            })
        
     }   
            const getPlanet = Planets.map((planets) => {
            return <option key={planets} value={planets}>{planets}</option>
        })
    
    return (
        <GlobalStyles>
                <Header>
                    <button onClick={goHomePage}>
                    Home
                </button> 
                </Header>
                
                <form onSubmit={create}>
                <SalaDeComando>
                    <h1>Sala de comando</h1>  
                </SalaDeComando>
                <Inputs>
                    <input
                        name={"name"}
                        placeholder="Nome"
                        type="name"
                        value={form.name}
                        onChange={onChange}
                    />

                    <select
                        name={"planet"}
                        value={form.planet}
                        onChange={onChange}
                        placeholder="Planet"
                    >
                        <option value="" disabled>Escolha um planeta</option>
                        {getPlanet}
                    </select>
                    <input
                        name={"date"}
                        placeholder="Data"
                        type={"date"}
                        value={form.date}
                        onChange={onChange}
                    />
                    <input
                        name={"description"}
                        placeholder="Descrição"
                        value={form.description}
                        onChange={onChange}
                    />
                    <input
                        name={"durationInDays"}
                        placeholder="Duração em dias"
                        value={form.durationInDays}
                        onChange={onChange}
                    />
                </Inputs>
                <BotaoCriar>
                    <button>Criar</button> 
                </BotaoCriar>
                
                
            </form>
        </GlobalStyles >
    )
}
export default CreateTripPage