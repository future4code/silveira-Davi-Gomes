import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToSignUp, goToFeed } from '../../routes/coordinator'
import { login } from '../../services/user'
import useProtectedPage from '../../hooks/useProtectedPage'
import {Form, ScreenContainer, Button2,ContainerHeader} from './styled'
import Logo from '../../assets/logo.png'

export default function LoginPage() {
  useProtectedPage()
  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate)
  }

  return (
    <ScreenContainer>
      <ContainerHeader>
        <img src={Logo}></img>
        <h1>LabEddit</h1>
        <p>o projeto de rede social da Labenu</p>
      </ContainerHeader>
      <Form onSubmit={onSubmitForm}>
        
          <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="Email"
            required
            type={"email"}
            />
          <input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
            type={"password"}
            />
          <button
            type={"submit"}
          >
          login 
          </button>
        <hr/>
          </Form>
      
        <Button2
          onClick={() => goToSignUp(navigate)}
          type={"submit"}
          >
          cadastre-se
        </Button2>
    </ScreenContainer>
  )
}
