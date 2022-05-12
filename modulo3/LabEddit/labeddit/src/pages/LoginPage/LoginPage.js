import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToSignUp, goToFeed } from '../../routes/coordinator'
import { login } from '../../services/user'
import useProtectedPage from '../../hooks/useProtectedPage'
import { Botoes, Botao2,ContainerPai,Inputs} from './styled'


export default function LoginPage() {
  useProtectedPage()
  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate)
  }

  return (
    <ContainerPai>
      <div>
        loginPage
        {/* imagem */}
      </div>
      <form onSubmit={onSubmitForm}>
        <Inputs>
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
        </Inputs>
        <Botoes>
          <button
            type={"submit"}
          >
          <span>login</span> 
          </button>
        </Botoes>
      </form>
      <Botao2>
        <button
          onClick={() => goToSignUp(navigate)}
          type={"submit"}
        >
          cadastre-se
        </button>
      </Botao2>
    </ContainerPai>
  )
}
