import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToSignUp, goToFeed } from '../../routes/coordinator'
import {login} from '../../services/user'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function LoginPage() {
  useProtectedPage()
  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form,clear,navigate)
  }
  
  return (
    <div>
      <div>
        loginPage
        {/* imagem */}
      </div>
      <form onSubmit={onSubmitForm}>
        <div>
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
        </div>
        <div>
          <button
            type={"submit"}


          >
            login
          </button>

        </div>

      </form>
      <button
        onClick={() => goToSignUp(navigate)}
        type={"submit"}
      >
        cadastre-se
      </button>
    </div>
  )
}
