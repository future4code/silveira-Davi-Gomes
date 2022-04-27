import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import './css/ListTripsPage.css'


const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
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

button{
margin-right:25px;
margin-left: 25px;
height: 4vh;
width: 18vh;
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
    const navigate = useNavigate()
    const irParaHome = () => {
        navigate("/")  
    }
    const ApplicationFormPage = ()=>{
        navigate("/trips/application")
    }


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
                        </div>
                    </div>
                </Card>

            </div>
        </GlobalStyles>

    )
}

export default ListTripsPage