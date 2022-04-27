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
const ButtonHome = styled.div`
display: flex;
justify-content: flex-end;
margin-top:55px ;
margin-right: 55px;
`


function ApplicationFormPage() {
    const navigate = useNavigate()
    const irParaHome = () => {
        navigate("/")  
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
            </div>
        </GlobalStyles>

    )
}

export default ApplicationFormPage



