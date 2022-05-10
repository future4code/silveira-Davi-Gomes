import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToSignUp, goToFeed } from '../../routes/coordinator'






export default function LoginPage () {
  const navigate = useNavigate()

  const [form, onChange,clear] = useForm({email:"", password: ""})

  const onSubmitForm =  (event) => {
  event.preventDefault()
  console.log(form)

  }
  return (
    <div>
      <div>
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
      onClick={() => goToFeed(navigate)}
      type={""} 
      
      >
      login
      </button>
      
      </div>
      
      </form>
      <button
      onClick={() =>goToSignUp(navigate)}
      type={"submit"} 
      >
      cadastre-se
      </button>
    </div>
  )
}
