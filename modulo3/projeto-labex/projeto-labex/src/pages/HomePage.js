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
    display: flex;
    flex-direction: column;  
    color: white;
    gap: 80px;
    
`
const ContainerHome = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    align-items: center;
`
const DivMeio = styled.div`
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
`
const Header = styled.div`
height: 100px;
h2{
    font-size: 30px;
    font-style: italic;
    margin-left: 55px ;
   
}
span{
   
    width: 100px;
  height: 100px;
  
  animation: myfirst 5s linear 1s infinite alternate;
}
@keyframes myfirst {
  0%   {color:red}
  25%  {color:yellow }
  50%  {color:blue }
  75%  {color:green }
  100% {color:red }
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
            <Header>
                <h2>Labe <span >X</span></h2> 
                </Header>
            <ContainerHome>
                <DivMeio>
                    <img src={MyImg}></img>
                    <h1>Viagens espaciais</h1>
                </DivMeio>
            </ContainerHome>
            <Botoes>
                    <button onClick={irParaLogin}>
                        Login
                        </button> 
                        <button onClick={irParaViagem}>
                        Viagens
                        </button>   
                </Botoes>
        </GlobalStyles>
    )
}

export default HomePage