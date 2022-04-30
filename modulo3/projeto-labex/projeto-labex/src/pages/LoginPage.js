import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const GlobalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;  
    
`
const ButtonHome = styled.div`
display: flex;
justify-content: flex-end;
margin-top:55px ;
margin-right: 55px;
`
const ButtonLogin = styled.div`

`

function LoginPage() {
  const navigate = useNavigate()
  
  const irParaHome = () => {
    navigate("/")
  }
  const goAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  const [email, setEmail] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const [password, setPassword] = useState("")

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const login = () => {
    const body = {
      email: email,
      password: password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-gomes-silveira/login", body)
      .then((res) => {
        alert("ESTA TROCADO DE PAGINA")
        console.log(res)
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token)
        goAdminHomePage()
      })
      .catch((err) => {
        
        console.log(err)
      })
  }



  return (
    <GlobalStyles>
      
        <ButtonHome classNameName="Button" >
          <button onClick={irParaHome}>
            Home
          </button>
        </ButtonHome>
        <div/>
        
         <div>

            <input 
            type="Email" 
            placeholder="E-mail" 
            value={email} 
            onChange={onChangeEmail} />

            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={onChangePassword} />
         
          <ButtonLogin>
         <button onClick={login}>
            login
         </button>
          </ButtonLogin>
        </div>
       
    </GlobalStyles>
  )
}

export default LoginPage