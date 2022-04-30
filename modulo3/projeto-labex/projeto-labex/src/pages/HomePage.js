import React from 'react'
import styled from 'styled-components'
import MyImg from './img/dog.gif'
import {useNavigate} from 'react-router-dom'


const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display: grid;
    flex-direction: column;  
    color: white;
    
`
const ContainerHome = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    align-items: center;
`
const DivEsquerda = styled.div`
    /* height: 30vh; */
    display: flex;
    
    flex-direction:column;
    img{
        
        border-radius: 10px;
        max-width:800px;
        width: 100%;
        max-height:400px ;
        height: 100%;
    }
    h1{
        text-align: center;
    }
    h2{
    text-align: center;
    }
`
const Botoes = styled.div`
    display: flex;
    flex-direction:row;
gap: 30px;
justify-content:center;



    button{
        padding: 8px;
        max-width:100px;
    }
`

function HomePage() {
    const navigate = useNavigate()
    const irParaViagem = () => {
        navigate("/trips/list")
    }
    const irParaLogin = () => {
        navigate("/login")
    }
    return (
        <GlobalStyles>
            <ContainerHome>
                <DivEsquerda>
                    <h2>LabeX</h2>
                    <img src={MyImg}></img>
                    <h1>Viagens espaciais</h1>
                </DivEsquerda>
                <Botoes>
                    <button onClick={irParaLogin}>
                            Login
                        </button> 
                        <button onClick={irParaViagem}>
                            Viagens
                        </button>  
                </Botoes>
            </ContainerHome>
        </GlobalStyles>
    )
}

export default HomePage