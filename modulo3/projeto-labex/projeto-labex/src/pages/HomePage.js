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
`
const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    justify-content: space-around;
    margin-right: 25px;
    align-items: center;
`

const DivEsquerda = styled.div`
    height: 30vh;
    img{
        display: flex;
        flex-direction:column;
        border-radius: 10px;
        width: 50vh;


    }
`
const DivDireita = styled.div`
    display: flex;
    flex-direction:column;
    height: 25vh;
`
// const Button = styled.div`
// display: flex;
// flex-direction:column ;
// height: 25vh;

// button {
//     /* transform: rotate(-25deg) skew(25deg); */
//     transform-style: preserve-3d;
//     position: relative;
//     list-style: none;
//     width: 100px;
//     height: 32px;
//     border: none;
//     background: transparent;
    
// }

// button:before {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: -5px;
//     width: 100%;
//     height: 10px;
//     background: #2a2a2a;
//     transform: skewX(-41deg);
// }

// button:after {
//     content: '';
//     position: absolute;
//     top: 5px;
//     left: -9px;
//     width: 9px;
//     height: 100%;
//     background: #2a2a2a;
//     transform: skewY(-49deg);
// }

// button span {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: #2a2a2a;
//     color: #fff;
//     font-size: 25px;
//     transition: 1.1s ease-out;
// }

// button:hover span {
//     z-index: 1000;
//     transition: .3s;
//     color: #fff;
// }

// button:hover span:nth-child(5) {
//     transform: translate(40px, -40px);
//     opacity: 1;
// }

// button:hover span:nth-child(4) {
//     transform: translate(30px, -30px);
//     opacity: .8;
// }

// button:hover span:nth-child(3) {
//     transform: translate(20px, -20px);
//     opacity: .6;
// }

// button:hover span:nth-child(2) {
//     transform: translate(10px, -10px);
//     opacity: .4;
// }

// button:hover span:nth-child(1) {
//     transform: translate(0px, 0px);
//     opacity: .2;
// }

// button:active span:nth-child(5) {
//     transform: translate(20px, -20px);
//     opacity: 1;
// }

// button:active span:nth-child(4) {
//     transform: translate(15px, -15px);
// }

// button:active span:nth-child(3) {
//     transform: translate(10px, -10px);
// }

// button:active span:nth-child(2) {
//     transform: translate(5px, -5px);
// }

// button:active span:nth-child(1) {
//     transform: translate(0px, 0px);
// }

// button:nth-child(1):hover span {
//     background: #52E19F;
    
// }
// `

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
                    <img src={MyImg}></img>
                    <h1>Viagens espaciais</h1>
                </DivEsquerda>
                <DivDireita>
                    {/* <Button> */}
                        <button onClick={irParaLogin}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Login</span>
                        </button>
                    {/* </Button> */}
                    {/* <Button> */}
                        <button onClick={irParaViagem}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Viagens</span>
                        </button>
                    {/* </Button> */}

                </DivDireita>

            </ContainerHome>
        </GlobalStyles>
    )
}

export default HomePage